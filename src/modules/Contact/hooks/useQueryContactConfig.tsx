import omitBy from 'lodash/omitBy'
import { isUndefined } from 'lodash'
import { useQueryParams } from 'src/modules/Share/hooks/useQueryParam'
import { ContactListConfig } from '../interfaces/contact.type'

export type QueryContactConfig = {
  [key in keyof ContactListConfig]: string
}

const useQueryContactConfig = () => {
  const queryContactParams: QueryContactConfig = useQueryParams()
  const queryContactConfig: QueryContactConfig = omitBy(
    {
      name: queryContactParams.name,
      sorting: queryContactParams.sorting || 'name',
      page: queryContactParams.page || 1,
      size: queryContactParams.size || 10,
      id: queryContactParams.id
    },
    isUndefined
  )
  return queryContactConfig
}

export default useQueryContactConfig
