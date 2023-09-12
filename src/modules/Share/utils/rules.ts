import * as yup from 'yup'

export const InputSearchSchema = yup.object({
  name: yup.string().trim()
})

export type InputSearchType = yup.InferType<typeof InputSearchSchema>

export const SelectPageSizeSchema = yup.object({
  size: yup.string()
})

export type SelectPageSizeType = yup.InferType<typeof SelectPageSizeSchema>
