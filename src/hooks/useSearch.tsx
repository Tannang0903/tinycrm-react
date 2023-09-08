import { useForm } from 'react-hook-form'
import useQueryConfig from './useQueryConfig'
import { InputSearchSchema, InputSearchType } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { createSearchParams } from 'react-router-dom'

const useSearch = () => {
  const queryAccountConfig = useQueryConfig()

  const { register, handleSubmit } = useForm<InputSearchType>({
    defaultValues: {
      name: ''
    },
    resolver: yupResolver(InputSearchSchema)
  })

  const handleSubmitSearch = handleSubmit((data) => {
    const config = {
      ...queryAccountConfig,
      name: data.name as string
    }
    createSearchParams(config)
  })

  return { register, handleSubmitSearch }
}

export default useSearch
