import { Link } from 'react-router-dom'
import { Account } from '../../interfaces/account.type'
import path from 'src/modules/Share/constants/path'
import { QueryAccountConfig } from '../../hooks/useQueryAccountConfig'

interface Props {
  accounts: Account[]
  handleSortName: () => void
  handleSortEmail: () => void
  isSortingName: boolean
  isSortingEmail: boolean
  queryAccountConfig: QueryAccountConfig
}

const AccountTable = ({
  accounts,
  handleSortName,
  handleSortEmail,
  isSortingName,
  isSortingEmail,
  queryAccountConfig
}: Props) => {
  return (
    <table className='w-full text-left border-x-[1px] border-gray-200 p-2 bg-white'>
      <thead className='bg-[#f7f8f9]'>
        <tr className='text-[14px] text-gray-600 border-b-[1px] border-gray-200'>
          <th className='w-4 px-4'>
            <input type='checkbox' name='' id='' className='w-4 h-4 outline-none' />
          </th>
          <th className='px-4 py-2 font-medium cursor-pointer' onClick={handleSortName}>
            <span>Name</span>
            {isSortingName ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-4 h-4 ml-[2px] inline-block'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 15.75l7.5-7.5 7.5 7.5' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-4 h-4 ml-[2px] inline-block'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
              </svg>
            )}
          </th>
          <th className='px-4 py-2 font-medium cursor-pointer ' onClick={handleSortEmail}>
            <span>Email</span>
            {isSortingEmail ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-4 h-4 ml-[2px] inline-block'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 15.75l7.5-7.5 7.5 7.5' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-4 h-4 ml-[2px] inline-block'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
              </svg>
            )}
          </th>
          <th className='px-4 py-2 font-medium'>Total Sales</th>
          <th className='w-[80px]'></th>
        </tr>
      </thead>
      <tbody>
        {accounts &&
          accounts.map((account) => (
            <tr className='text-[14px] text-gray-600 border-b-[1px] border-gray-200' key={account.id}>
              <th className='w-4 px-4'>
                <input type='checkbox' name='' id='' className='w-4 h-4 outline-none' />
              </th>
              <th className='px-4 py-4 font-medium'>{account.name}</th>
              <th className='px-4 py-4 font-medium'>{account.email}</th>
              <th className='px-4 py-4 font-medium'>{account.totalSales}</th>
              <th className='px-4 py-4 font-medium'>
                <Link
                  to={`${path.accounts}/${account.id}`}
                  state={queryAccountConfig}
                  className='w-[80px] flex items-center justify-center text-[#16a34a] hover:text-[#22c55e]'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-4 h-4 mr-2'
                  >
                    <path d='M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z' />
                  </svg>
                  <span className='hover:underline'>Edit</span>
                </Link>
              </th>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default AccountTable
