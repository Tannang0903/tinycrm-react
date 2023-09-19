import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { SelectPageSizeSchema } from 'src/modules/Share/utils/rules'
import path from 'src/modules/Share/constants/path'
import useQueryAccountConfig, { QueryAccountConfig } from 'src/modules/Account/hooks/useQueryAccountConfig'

const useSelectAccountPage = () => {
  const queryAccountConfig = useQueryAccountConfig()

  const navigate = useNavigate()

  const { register } = useForm<QueryAccountConfig>({
    defaultValues: {
      size: '10'
    },
    resolver: yupResolver(SelectPageSizeSchema)
  })

  const handleChangeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const config = {
      ...queryAccountConfig,
      size: event.target.value as string
    }

    navigate({
      pathname: path.accounts,
      search: createSearchParams(config).toString()
    })
  }
  return { register, handleChangeOption }
}

export default useSelectAccountPage
