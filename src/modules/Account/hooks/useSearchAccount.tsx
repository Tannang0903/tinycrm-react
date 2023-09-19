import { useForm } from 'react-hook-form'
import { InputSearchSchema, InputSearchType } from 'src/modules/Share/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { createSearchParams } from 'react-router-dom'
import useQueryAccountConfig from './useQueryAccountConfig'

const useSearchAccount = () => {
  const queryAccountConfig = useQueryAccountConfig()

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

export default useSearchAccount
