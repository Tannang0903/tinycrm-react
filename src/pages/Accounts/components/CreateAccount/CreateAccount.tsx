import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import accountAPI from 'src/apis/account.api'
import path from 'src/constants/path'
import { FormAccountSchema, FormAccountSchemaType } from 'src/utils/rules'
import { isAxiosConflict } from 'src/utils/utils'
import { toast } from 'react-toastify'

const CreateAccount = () => {
  const navigate = useNavigate()

  const queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormAccountSchemaType>({
    resolver: yupResolver(FormAccountSchema)
  })

  const CreateAccountMutation = useMutation({
    mutationFn: (body: FormAccountSchemaType) => {
      return accountAPI.createAccount(body)
    }
  })

  const handleCancelCreate = () => {
    navigate(path.accounts)
  }

  const onSubmit = handleSubmit((data) => {
    CreateAccountMutation.mutate(data, {
      onSuccess: () => {
        toast.success('Create Account Successfully!')
        queryClient.invalidateQueries({
          queryKey: ['accounts']
        })
        navigate(path.accounts)
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

  return (
    <Fragment>
      <Helmet>
        <title>Create Account</title>
        <meta name='description' content='Đây là trang Create Account của dự án' />
      </Helmet>
      <div>
        <div className='flex justify-between items-center pt-[16px] pb-[40px]'>
          <h2 className='text-[24px] text-gray-900 font-bold'>Create Account</h2>
        </div>
        <div className='grid grid-cols-3 gap-6'>
          <div className='col-span-2'>
            <form onSubmit={onSubmit}>
              <div className='flex flex-col gap-2 p-6 bg-white rounded-2xl border-[1px] border-gray-300 text-[14px] font-semibold'>
                <div className='flex flex-col'>
                  <label htmlFor='name' className='mb-2'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    className='border-[1px] border-gray-200 rounded-md py-2 px-4 outline-[#22c55e]'
                    {...register('name')}
                  />
                  <span className='block min-h-[14px] text-red-700 text-xs mt-1 font-light'>
                    {errors.name?.message}
                  </span>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='email' className='mb-2'>
                    Email
                  </label>
                  <input
                    type='text'
                    id='email'
                    className='border-[1px] border-gray-200 rounded-md py-2 px-4 outline-[#22c55e]'
                    {...register('email')}
                  />
                  <span className='block min-h-[16px] text-red-700 text-xs mt-1 font-light'>
                    {errors.email?.message}
                  </span>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='phone' className='mb-2'>
                    Phone number
                  </label>
                  <input
                    type='text'
                    id='phone'
                    className='border-[1px] border-gray-200 rounded-md py-2 px-4 outline-[#22c55e]'
                    {...register('phone')}
                  />
                  <span className='block min-h-[16px] text-red-700 text-xs mt-1 font-light'>
                    {errors.phone?.message}
                  </span>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='address' className='mb-2'>
                    Address
                  </label>
                  <input
                    type='text'
                    id='address'
                    className='border-[1px] border-gray-200 rounded-md py-2 px-4 outline-[#22c55e]'
                    {...register('address')}
                  />
                  <span className='block min-h-[16px] text-red-700 text-xs mt-1 font-light'>
                    {errors.address?.message}
                  </span>
                </div>
              </div>
              <div className='flex gap-6'>
                <button
                  type='submit'
                  className='bg-[#22c55e] py-2 px-4 rounded-lg text-[14px] text-white font-semibold mt-6'
                >
                  Create
                </button>
                <button
                  type='button'
                  onClick={handleCancelCreate}
                  className='bg-white py-2 px-4 rounded-lg text-[16px] text-gray-800 font-semibold mt-6 border-[1px] border-gray-300'
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <div className='col-span-1'>
            <div className='flex flex-col p-6 bg-white rounded-2xl border-[1px] border-gray-300 text-[14px] font-semibold'>
              <label htmlFor='total_sales' className='mb-2'>
                Total sales
              </label>
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