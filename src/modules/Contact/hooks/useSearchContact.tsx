import { useForm } from 'react-hook-form'
import { InputSearchSchema, InputSearchType } from 'src/modules/Share/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { createSearchParams } from 'react-router-dom'
import useQueryContactConfig from './useQueryContactConfig'

const useSearchContact = () => {
  const queryContactConfig = useQueryContactConfig()

  const { register, handleSubmit } = useForm<InputSearchType>({
    defaultValues: {
      name: ''
    },
    resolver: yupResolver(InputSearchSchema)
  })

  const handleSubmitSearch = handleSubmit((data) => {
    const config = {
      ...queryContactConfig,
      name: data.name as string
    }
    createSearchParams(config)
  })

  return { register, handleSubmitSearch }
}

export default useSearchContact
