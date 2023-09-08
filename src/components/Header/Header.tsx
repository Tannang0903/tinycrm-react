import { Link, useLocation, useNavigate } from 'react-router-dom'
import path from 'src/constants/path'
import Popover from '../Popover'
import { clearTokenFromLS } from 'src/utils/auth'
import { Fragment, useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'

const Header = () => {
  const navigate = useNavigate()

  const { setIsAuthenticated } = useContext(AppContext)

  const handleLogout = () => {
    setIsAuthenticated(false)
    clearTokenFromLS()
    navigate(path.login)
  }

  const location = useLocation().pathname.split('/').slice(1)

  return (
    <div className='sticky top-0 h-[64px] flex shrink-0 bg-white z-10'>
      <div className='min-w-[320px] flex items-center px-[24px] border-b-[1px] border-gray-200'>
        <svg
          className='h-6 w-6 text-[#22c55e] mr-[16px]'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M20.25 7.5L16 12L20.25 16.5M3.75 12H12M3.75 17.25H16M3.75 6.75H16' stroke='currentColor'></path>
        </svg>
        <Link to={path.home} className='text-[20px] font-bold text-gray-950'>
          TinyCRM
        </Link>
      </div>
      <div className='w-full border-b-[1px] border-l-[1px] flex items-center justify-between px-8'>
        <div className='font-medium text-[14px] capitalize flex'>
          {location[0] !== 'dashboard' && (
            <Fragment>
              <span>{location[0]}</span>
              <div className='h-6 mx-4 border-r border-gray-300 -skew-x-12'></div>
              {location[1] ? (
                <span className='text-gray-500'>{location[1]}</span>
              ) : (
                <span className='text-gray-500'>List</span>
              )}
            </Fragment>
          )}
        </div>
        <Popover
          renderPopover={
            <div className='w-[224px] bg-white border-[1px] border-gray-200 rounded-xl text-gray-700 font-normal text-[16px] p-1'>
              <div className='flex items-center border-b-[1px] border-gray-200 p-2'>
                <img
                  src='https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png'
                  alt=''
                  className='h-[16px] w-[16px] rounded-[50%] border-[1px] border-gray-300 mr-3'
                />
                <span>Admin</span>
              </div>
              <button
                type='button'
                className='flex items-center p-2 w-full hover:bg-[#22c55e] hover:text-white rounded-lg mt-1'
                onClick={handleLogout}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-5 h-5 mr-2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
                  />
                </svg>
                <span>Sign out</span>
              </button>
            </div>
          }
        >
          <div className='ml-4'>
            <img
              src='https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png'
              alt=''
              className='h-[40px] w-[40px] rounded-[50%] border-[1px] border-gray-300'
            />
          </div>
        </Popover>
      </div>
    </div>
  )
}

export default Header
