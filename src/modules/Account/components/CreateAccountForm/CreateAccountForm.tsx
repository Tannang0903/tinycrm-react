import { Fragment } from 'react'
import { UseFormRegister, FieldErrors } from 'react-hook-form'

interface CreateAccountForm {
  name: string
  email: string
  phone: string
  address: string
}

interface Props {
  register: UseFormRegister<CreateAccountForm>
  errors: FieldErrors<CreateAccountForm>
  handleCancelCreate: () => void
}

const CreateAccountForm = ({ register, errors, handleCancelCreate }: Props) => {
  return (
    <Fragment>
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
          <span className='block min-h-[14px] text-red-700 text-xs mt-1 font-light'>{errors.name?.message}</span>
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
          <span className='block min-h-[16px] text-red-700 text-xs mt-1 font-light'>{errors.email?.message}</span>
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
          <span className='block min-h-[16px] text-red-700 text-xs mt-1 font-light'>{errors.phone?.message}</span>
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
          <span className='block min-h-[16px] text-red-700 text-xs mt-1 font-light'>{errors.address?.message}</span>
        </div>
      </div>
      <div className='flex gap-6'>
        <button type='submit' className='bg-[#22c55e] py-2 px-4 rounded-lg text-[14px] text-white font-semibold mt-6'>
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
    </Fragment>
  )
}

export default CreateAccountForm
