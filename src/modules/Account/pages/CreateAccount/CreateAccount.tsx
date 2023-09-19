import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import accountAPI from 'src/modules/Account/services/account.api'
import path from 'src/modules/Share/constants/path'
import { isAxiosConflict } from 'src/modules/Share/utils/utils'
import { toast } from 'react-toastify'
import { FormAccountSchema, FormAccountType } from '../../utils/rules'
import CreateAccountForm from '../../components/CreateAccountForm'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'

const CreateAccount = () => {
  const navigate = useNavigate()

  const location = useLocation()

  const prevAccountConfig = location.state

  const queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormAccountType>({
    resolver: yupResolver(FormAccountSchema)
  })

  const CreateAccountMutation = useMutation({
    mutationFn: (body: FormAccountType) => {
      return accountAPI.createAccount(body)
    }
  })

  const onSubmit = handleSubmit((data) => {
    CreateAccountMutation.mutate(data, {
      onSuccess: () => {
        toast.success('Create Account Successfully!')
        queryClient.invalidateQueries({
          queryKey: ['accounts']
        })
        navigate({
          pathname: path.accounts,
          search: createSearchParams(prevAccountConfig).toString()
        })
      },
      onError: (error) => {
        if (isAxiosConflict(error)) {
          const CreateError = error.response?.data.message
          setError('email', {
            message: CreateError,
            type: 'Server'
          })
        }
      }
    })
  })

  const handleCancelCreate = () => {
    navigate({
      pathname: path.accounts,
      search: createSearchParams(prevAccountConfig).toString()
    })
  }

  return (
    <Fragment>
      <Helmet>
        <title>Create Account</title>
        <meta name='description' content='This is create account page of the project' />
      </Helmet>
      <div>
        <div className='flex justify-between items-center pt-[16px] pb-[40px]'>
          <h2 className='text-[24px] text-gray-900 font-bold'>Create Account</h2>
        </div>
        <div className='grid grid-cols-3 gap-6'>
          <div className='col-span-2'>
            <form onSubmit={onSubmit}>
              <CreateAccountForm
                register={register}
                errors={errors}
                handleCancelCreate={handleCancelCreate}
              ></CreateAccountForm>
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
                <input
                  type='text'
                  id='total_sales'
                  className='border-[1px] border-gray-200 rounded-md py-2 px-4 flex-1 min-w-[40px] ml-2'
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CreateAccount
