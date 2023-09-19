import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import EditContactForm from '../../components/EditContactForm'

const EditContact = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Edit Contact</title>
        <meta name='description' content='This is edit contact page of the project' />
      </Helmet>
      <div>
        <div className='flex justify-between items-center pt-[16px] pb-[40px]'>
          <h2 className='text-[24px] text-gray-900 font-bold'>Edit Contact</h2>
          <button
            type='button'
            className='bg-red-500 py-2 px-4 rounded-lg text-[16px] text-white font-semibold hover:bg-red-400'
          >
            Delete
          </button>
        </div>
        <form>
          <EditContactForm />
        </form>
      </div>
    </Fragment>
  )
}

export default EditContact
