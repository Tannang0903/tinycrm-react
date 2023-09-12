import * as yup from 'yup'

export const LoginSchema = yup.object({
  userNameOrEmail: yup.string().required('Email is required !').email('Invalid Email !'),
  password: yup.string().required('Password is required !')
})

export type LoginType = yup.InferType<typeof LoginSchema>
