import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { Fragment, useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import authAPI from 'src/apis/auth.api'
import path from 'src/constants/path'
import { AppContext } from 'src/contexts/app.context'
import { LoginSchema, LoginSchemaType } from 'src/utils/rules'
import { toast } from 'react-toastify'
import { isAxiosNotFound } from 'src/utils/utils'

const Login = () => {
  const { setIsAuthenticated } = useContext(AppContext)

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchemaType>({
    resolver: yupResolver(LoginSchema)
  })

  const loginMutation = useMutation({
    mutationFn: (body: LoginSchemaType) => {
      return authAPI.login(body)
    }
  })

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: () => {
        setIsAuthenticated(true)
        navigate(path.home)
      },
      onError: (error) => {
        if (isAxiosNotFound(error)) {
          const loginError = error.response?.data
          toast.error(loginError?.message)
        }
      }
    })
  })

  return (
    <Fragment>
      <Helmet>
        <title>Login</title>
        <meta name='description' content='This is login page of the project' />
      </Helmet>
      <div className='p-8 border-[1px] border-gray-200 rounded-xl max-w-md w-[440px] shadow-[rgba(34,_197,_94,_0.19)_0px_12px_20px]'>
        <h1 className='text-center text-[20px] font-bold'>TinyCRM</h1>
        <h2 className='text-center text-[24px] font-bold mt-4 mb-4'>Login</h2>
        <form onSubmit={onSubmit}>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col'>
              <label htmlFor='email' className='mb-2'>
                Email address
              </label>
              <input
                type='text'
                id='email'
                className='border-[1px] border-gray-200 rounded-md py-2 px-4 outline-[#22c55e]'
                {...register('userNameOrEmail')}
              />
              <span className='block min-h-[16px] text-red-700 text-xs mt-1 font-light'>
                {errors.userNameOrEmail?.message}
              </span>
            </div>
            <div className='flex flex-col'>
              <label htmlFor='password' className='mb-2'>
                Password
              </label>
              <input
                type='password'
                id='password'
                className='border-[1px] border-gray-200 rounded-md py-2 px-4 outline-[#16a34a]'
                autoComplete='on'
                {...register('password')}
              />
              <span className='block min-h-[16px] text-red-700 text-xs mt-1 font-light'>
                {errors.password?.message}
              </span>
            </div>
            <button
              type='submit'
              className='w-full bg-[#22c55e] hover:bg-[#30e673] p-2 rounded-md text-[14px] text-white font-semibold hover:bg'
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  )
}

export default Login
