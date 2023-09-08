import { AccountListConfig } from 'src/types/account.type'
import { useQueryParams } from './useQueryParam'
import omitBy from 'lodash/omitBy'
import { isUndefined } from 'lodash'

export type QueryAccountConfig = {
  [key in keyof AccountListConfig]: string
}

const useQueryConfig = () => {
  const queryAccountParams: QueryAccountConfig = useQueryParams()
  const queryAccountConfig: QueryAccountConfig = omitBy(
    {
      name: queryAccountParams.name,
      sorting: queryAccountParams.sorting,
      page: queryAccountParams.page || 1,
      size: queryAccountParams.size || 10
    },
    isUndefined
  )
  return queryAccountConfig
}

export default useQueryConfig
