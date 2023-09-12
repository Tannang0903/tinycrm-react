import * as yup from 'yup'

export const FormAccountSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required').email('Invalid Email'),
  phone: yup.string().required('Phone number is required'),
  address: yup.string().required('Address is required')
})

export type FormAccountType = yup.InferType<typeof FormAccountSchema>
