import * as yup from 'yup'

export const LoginSchema = yup.object({
  userNameOrEmail: yup.string().required('Email is required').email('Invalid Email'),
  password: yup.string().required('Password is required')
})

export type LoginSchemaType = yup.InferType<typeof LoginSchema>

export const FormAccountSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required').email('Invalid Email'),
  phone: yup.string().required('Phone number is required'),
  address: yup.string().required('Address is required')
})

export type FormAccountSchemaType = yup.InferType<typeof FormAccountSchema>

export const InputSearchSchema = yup.object({
  name: yup.string().trim()
})

export type InputSearchType = yup.InferType<typeof InputSearchSchema>

export const OptionPageSizeSchema = yup.object({
  size: yup.string()
})

export type OptionPageSizeType = yup.InferType<typeof OptionPageSizeSchema>
