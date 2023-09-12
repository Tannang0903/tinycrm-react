import { AccountListConfig } from 'src/modules/Account/interfaces/account.type'
import { useQueryParams } from '../../Share/hooks/useQueryParam'
import omitBy from 'lodash/omitBy'
import { isUndefined } from 'lodash'

export type QueryAccountConfig = {
  [key in keyof AccountListConfig]: string
}

const useQueryAccountConfig = () => {
  const queryAccountParams: QueryAccountConfig = useQueryParams()
  const queryAccountConfig: QueryAccountConfig = omitBy(
    {
      name: queryAccountParams.name,
      sorting: queryAccountParams.sorting || 'name',
      page: queryAccountParams.page || 1,
      size: queryAccountParams.size || 10
    },
    isUndefined
  )
  return queryAccountConfig
}

export default useQueryAccountConfig
