import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { SelectPageSizeSchema } from 'src/modules/Share/utils/rules'
import path from 'src/modules/Share/constants/path'
import useQueryContactConfig, { QueryContactConfig } from './useQueryContactConfig'

const useSelectContactPage = () => {
  const queryContactConfig = useQueryContactConfig()

  const navigate = useNavigate()

  const { register } = useForm<QueryContactConfig>({
    defaultValues: {
      size: '10'
    },
    resolver: yupResolver(SelectPageSizeSchema)
  })

  const handleChangeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const config = {
      ...queryContactConfig,
      size: event.target.value as string
    }

    navigate({
      pathname: path.contacts,
      search: createSearchParams(config).toString()
    })
  }
  return { register, handleChangeOption }
}

export default useSelectContactPage
