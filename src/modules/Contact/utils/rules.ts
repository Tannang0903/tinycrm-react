import * as yup from 'yup'

export const FormContactSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required').email('Invalid Email'),
  phone: yup.string().required('Phone number is required'),
  accountId: yup.number()
})

export type FormContactType = yup.InferType<typeof FormContactSchema>
