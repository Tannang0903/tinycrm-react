import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import ContactTable from '../../components/ContactTable'

const Contact = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Contacts</title>
        <meta name='description' content='This is contact page of the project' />
      </Helmet>
      <div>
        <div className='flex justify-between items-center pt-[16px] pb-[40px]'>
          <h2 className='text-[24px] text-gray-900 font-bold'>Contacts</h2>
          <Link to={''} className='text-[14px] font-semibold text-white bg-[#16a34a] px-4 py-2 rounded-lg'>
            New contact
          </Link>
        </div>
        <div className='w-full border-[1px] border-gray-200 bg-white p-2 rounded-t-lg flex justify-end'></div>
        <ContactTable />
        <div className='w-full border-x-[1px] border-b-[1px] border-gray-200 bg-white p-4 rounded-b-lg flex items-center justify-between'>
          <div className=' text-[14px] font-semibold'>
            Showing <span>1</span> to <span>10</span> of <span>25</span> results
          </div>
          <form>
            <div className='flex items-center'>
              <select id='page_size' className='border-[1px] border-gray-200 px-2 py-1 rounded-lg'>
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
                <option value='20'>20</option>
              </select>
              <span className='ml-2'>per page</span>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default Contact
