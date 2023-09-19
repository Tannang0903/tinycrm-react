import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import CreateContactForm from '../../components/CreateContactForm'

const CreateContact = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Create Contact</title>
        <meta name='description' content='This is create contact page of the project' />
      </Helmet>
      <div>
        <div className='flex justify-between items-center pt-[16px] pb-[40px]'>
          <h2 className='text-[24px] text-gray-900 font-bold'>Create Contact</h2>
        </div>
        <form>
          <CreateContactForm />
        </form>
      </div>
    </Fragment>
  )
}

export default CreateContact
