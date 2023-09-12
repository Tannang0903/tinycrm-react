import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { Fragment, useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import authAPI from 'src/modules/Authentication/services/auth.api'
import path from 'src/modules/Share/constants/path'
import { AppContext } from 'src/modules/Share/contexts/app.context'
import { toast } from 'react-toastify'
import { isAxiosNotFound } from 'src/modules/Share/utils/utils'
import LoginInput from '../components/LoginForm/LoginForm'
import { LoginSchema, LoginType } from '../utils/rules'

const Login = () => {
  const { setIsAuthenticated } = useContext(AppContext)

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginType>({
    resolver: yupResolver(LoginSchema)
  })

  const loginMutation = useMutation({
    mutationFn: (body: LoginType) => {
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
          <LoginInput register={register} errors={errors} />
        </form>
      </div>
    </Fragment>
  )
}

export default Login
