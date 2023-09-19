import { Fragment } from 'react'

const EditContactForm = () => {
  return (
    <Fragment>
      <div className='grid grid-cols-2 gap-2 p-6 bg-white rounded-2xl border-[1px] border-gray-300 text-[14px] font-semibold'>
        <div className='flex flex-col col-span-1'>
          <label htmlFor='name' className='mb-2'>
            Name
          </label>
          <input
            type='text'
            id='name'
            className='border-[1px] border-gray-200 rounded-md py-2 px-4 outline-[#22c55e]'
          />
          <span className='block min-h-[14px] text-red-700 text-xs mt-1 font-light'></span>
        </div>
        <div className='flex flex-col col-span-1'>
          <label htmlFor='email' className='mb-2'>
            Email
          </label>
          <input
            type='text'
            id='email'
            className='border-[1px] border-gray-200 rounded-md py-2 px-4 outline-[#22c55e]'
          />
          <span className='block min-h-[16px] text-red-700 text-xs mt-1 font-light'></span>
        </div>
        <div className='flex flex-col col-span-1'>
          <label htmlFor='phone' className='mb-2'>
            Phone number
          </label>
          <input
            type='text'
            id='phone'
            className='border-[1px] border-gray-200 rounded-md py-2 px-4 outline-[#22c55e]'
          />
          <span className='block min-h-[16px] text-red-700 text-xs mt-1 font-light'></span>
        </div>
        <div className='flex flex-col col-span-1'>
          <label htmlFor='address' className='mb-2'>
            Account
          </label>
          <select name='' id='' className='border-[1px] border-gray-200 px-2 py-[9px] rounded-lg'>
            <option value=''>1</option>
            <option value=''>2</option>
            <option value=''>3</option>
          </select>
          <span className='block min-h-[16px] text-red-700 text-xs mt-1 font-light'></span>
        </div>
      </div>
      <div className='flex gap-6'>
        <button type='submit' className='bg-[#22c55e] py-2 px-4 rounded-lg text-[14px] text-white font-semibold mt-6'>
          Save changes
        </button>
        <button
          type='button'
          className='bg-white py-2 px-4 rounded-lg text-[16px] text-gray-800 font-semibold mt-6 border-[1px] border-gray-300'
        >
          Cancel
        </button>
      </div>
    </Fragment>
  )
}

export default EditContactForm
