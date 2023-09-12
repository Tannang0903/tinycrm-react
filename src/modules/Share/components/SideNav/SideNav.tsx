import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import path from 'src/modules/Share/constants/path'

const SideNav = () => {
  return (
    <nav className='sticky top-[64px] max-w-[320px] h-[calc(100vh-64px)]  pt-[4px] pl-[16px] flex-1 overflow-y-auto overflow-x-hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
      <div className='border-b-[1px] py-6'>
        <NavLink
          to={path.home}
          className={({ isActive }) =>
            classNames('flex items-center px-2 py-2 mr-2 rounded-lg', {
              'bg-[#22c55e] text-[#fff]': isActive,
              'hover:bg-[#f5f6f7] text-[#2a2a2a]': !isActive
            })
          }
        >
          <svg
            className='h-5 w-5 shrink-0'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
            />
          </svg>
          <span className='text-[14px] font-medium ml-3'>Dashboard</span>
        </NavLink>
      </div>
      <div className='border-b-[1px] py-6'>
        <div className='flex items-center justify-between mr-2 px-2 py-2'>
          <h2 className='uppercase tracking-wider font-bold text-[12px] text-[#676767]'>People</h2>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-3 h-3'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 15.75l7.5-7.5 7.5 7.5' />
          </svg>
        </div>
        <NavLink
          to={path.accounts}
          className={({ isActive }) =>
            classNames('flex items-center px-2 py-2 mr-2 rounded-lg mb-2', {
              'bg-[#22c55e] text-[#fff]': isActive,
              'hover:bg-[#f5f6f7] text-[#2a2a2a]': !isActive
            })
          }
        >
          <svg
            className='h-5 w-5 shrink-0'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
            />
          </svg>
          <span className='text-[14px] font-medium ml-3'>Accounts</span>
        </NavLink>
        <NavLink
          to={path.contacts}
          className={({ isActive }) =>
            classNames('flex items-center px-2 py-2 mr-2 rounded-lg', {
              'bg-[#22c55e] text-[#fff]': isActive,
              'hover:bg-[#f5f6f7] text-[#2a2a2a]': !isActive
            })
          }
        >
          <svg
            className='h-5 w-5 shrink-0'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
            />
          </svg>
          <span className='text-[14px] font-medium ml-3'>Contacts</span>
        </NavLink>
      </div>
      <div className='border-b-[1px] py-6'>
        <div className='flex items-center justify-between mr-2 px-2 py-2'>
          <h2 className='uppercase tracking-wider font-bold text-[12px] text-[#676767]'>Sales</h2>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-3 h-3'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 15.75l7.5-7.5 7.5 7.5' />
          </svg>
        </div>
        <NavLink
          to={path.leads}
          className={({ isActive }) =>
            classNames('flex items-center px-2 py-2 mr-2 rounded-lg mb-2', {
              'bg-[#22c55e] text-[#fff]': isActive,
              'hover:bg-[#f5f6f7] text-[#2a2a2a]': !isActive
            })
          }
        >
          <svg
            className='h-5 w-5 shrink-0'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z'
            />
          </svg>
          <span className='text-[14px] font-medium ml-3'>Leads</span>
        </NavLink>
        <NavLink
          to={path.deals}
          className={({ isActive }) =>
            classNames('flex items-center px-2 py-2 mr-2 rounded-lg mb-2', {
              'bg-[#22c55e] text-[#fff]': isActive,
              'hover:bg-[#f5f6f7] text-[#2a2a2a]': !isActive
            })
          }
        >
          <svg
            className='h-5 w-5 shrink-0'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
            />
          </svg>
          <span className='text-[14px] font-medium ml-3'>Deals</span>
        </NavLink>
        <NavLink
          to={path.products}
          className={({ isActive }) =>
            classNames('flex items-center px-2 py-2 mr-2 rounded-lg', {
              'bg-[#22c55e] text-[#fff]': isActive,
              'hover:bg-[#f5f6f7] text-[#2a2a2a]': !isActive
            })
          }
        >
          <svg
            className='h-5 w-5 shrink-0'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
            />
          </svg>
          <span className='text-[14px] font-medium ml-3'>Products</span>
        </NavLink>
      </div>
      <div className='py-6'>
        <div className='flex items-center justify-between mr-2 px-2 py-2'>
          <h2 className='uppercase tracking-wider font-bold text-[12px] text-[#676767]'>Others</h2>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-3 h-3'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 15.75l7.5-7.5 7.5 7.5' />
          </svg>
        </div>
        <NavLink
          to={path.users}
          className={({ isActive }) =>
            classNames('flex items-center px-2 py-2 mr-2 rounded-lg ', {
              'bg-[#22c55e] text-[#fff]': isActive,
              'hover:bg-[#f5f6f7] text-[#2a2a2a]': !isActive
            })
          }
        >
          <svg
            className='h-5 w-5 shrink-0'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
            />
          </svg>
          <span className='text-[14px] font-medium ml-3'>Users</span>
        </NavLink>
      </div>
    </nav>
  )
}

export default SideNav
