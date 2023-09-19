import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import accountAPI from 'src/modules/Account/services/account.api'
import path from 'src/modules/Share/constants/path'
import { toast } from 'react-toastify'
import { FormAccountSchema, FormAccountType } from '../../utils/rules'
import EditAccountForm from '../../components/EditAccountForm'
import { Account } from '../../interfaces/account.type'
import useQueryAccountConfig from '../../hooks/useQueryAccountConfig'

const EditAccount = () => {
  const navigate = useNavigate()

  const queryClient = useQueryClient()

  const location = useLocation()

  const prevAccountConfig = location.state

  const queryAccountConfig = useQueryAccountConfig()

  const AccountQuery = useQuery({
    queryKey: ['account', queryAccountConfig],
    queryFn: () => accountAPI.getAccount(queryAccountConfig.id as string)
  })
  const account = AccountQuery.data?.data as Account

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<FormAccountType>({
    resolver: yupResolver(FormAccountSchema)
  })

  const EditAccountMutation = useMutation({
    mutationFn: (body: { id: string; data: FormAccountType }) => {
      return accountAPI.editAccount(body)
    }
  })

  const onSubmit = handleSubmit((data) => {
    EditAccountMutation.mutate(
      { id: account?.id as string, data: data },
      {
        onSuccess: () => {
          toast.success('Edit Account Successfully!')
          queryClient.invalidateQueries({
            queryKey: ['accounts']
          })
          navigate({
            pathname: path.accounts,
            search: createSearchParams(prevAccountConfig).toString()
          })
        }
      }
    )
  })

  const handleCancelEdit = () => {
    navigate({
      pathname: path.accounts,
      search: createSearchParams(prevAccountConfig).toString()
    })
  }

  const DeleteAccountMutation = useMutation({
    mutationFn: (id: string) => {
      return accountAPI.deleteAccount(id)
    }
  })

  const handleDeleteAccount = (id: string) => {
    DeleteAccountMutation.mutate(id, {
      onSuccess: () => {
        toast.success('Delete Account Successfully !')
        navigate({
          pathname: path.accounts,
          search: createSearchParams(prevAccountConfig).toString()
        })
        queryClient.invalidateQueries({
          queryKey: ['accounts']
        })
      }
    })
  }

  return (
    <Fragment>
      <Helmet>
        <title>Edit Account</title>
        <meta name='description' content='This is edit account page of the project' />
      </Helmet>
      <div>
        <div className='flex justify-between items-center pt-[16px] pb-[40px]'>
          <h2 className='text-[24px] text-gray-900 font-bold'>Edit Account</h2>
          <button
            type='button'
            onClick={() => handleDeleteAccount(account?.id as string)}
            className='bg-red-500 py-2 px-4 rounded-lg text-[16px] text-white font-semibold hover:bg-red-400'
          >
            Delete
          </button>
        </div>
        <div className='grid grid-cols-3 gap-6'>
          <div className='col-span-2'>
            <form onSubmit={onSubmit}>
              <EditAccountForm
                register={register}
                errors={errors}
                setValue={setValue}
                account={account}
                handleCancelEdit={handleCancelEdit}
              />
            </form>
          </div>
          <div className='col-span-1'>
            <div className='flex flex-col p-6 bg-white rounded-2xl border-[1px] border-gray-300 text-[14px] font-semibold'>
              <span className='mb-2'>Total sales</span>
              <div className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6 text-gray-300'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <div className='border-[1px] border-gray-200 rounded-md py-2 px-4 flex-1 min-w-[40px] ml-2 text-gray-400 font-light'>
                  {account?.totalSales}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default EditAccount
