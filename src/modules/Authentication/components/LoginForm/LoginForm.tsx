import { UseFormRegister, FieldErrors } from 'react-hook-form'

interface LoginForm {
  password: string
  userNameOrEmail: string
}

interface Props {
  register: UseFormRegister<LoginForm>
  errors: FieldErrors<LoginForm>
}

function LoginForm({ register, errors }: Props) {
  return (
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
        <span className='block min-h-[16px] text-red-700 text-xs mt-1 font-light'>{errors.password?.message}</span>
      </div>
      <button
        type='submit'
        className='w-full bg-[#22c55e] hover:bg-[#30e673] p-2 rounded-md text-[14px] text-white font-semibold hover:bg'
      >
        Sign in
      </button>
    </div>
  )
}

export default LoginForm
