import { useQuery } from '@tanstack/react-query'
import { Fragment, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import accountAPI from 'src/modules/Account/services/account.api'
import InputSearch from 'src/modules/Share/components/InputSearch'
import Pagination from 'src/modules/Share/components/Pagination'
import path from 'src/modules/Share/constants/path'
import useQueryConfig from 'src/modules/Account/hooks/useQueryAccountConfig'
import { Account, AccountListConfig } from 'src/modules/Account/interfaces/account.type'
import AccountTable from '../../components/AccountTable'
import useSearchAccount from '../../hooks/useSearchAccount'
import useSelectAccountPage from '../../hooks/useSelectAccountPage'

const Accounts = () => {
  const [isSortingName, setIsSortingName] = useState<boolean>(false)
  const [isSortingEmail, setIsSortingEmail] = useState<boolean>(false)

  const queryAccountConfig = useQueryConfig()

  const navigate = useNavigate()

  const SearchForm = useSearchAccount()

  const SelectedForm = useSelectAccountPage()

  const AccountsListQuery = useQuery({
    queryKey: ['accounts', queryAccountConfig],
    queryFn: () => accountAPI.getListAccounts(queryAccountConfig as AccountListConfig),
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })

  const accounts = AccountsListQuery.data?.data.data as Account[]

  const handleSortName = () => {
    let config = {}
    if (isSortingName) {
      config = {
        ...queryAccountConfig,
        sorting: 'name'
      }
      setIsSortingName(false)
    } else {
      config = {
        ...queryAccountConfig,
        sorting: 'name desc'
      }
      setIsSortingName(true)
      setIsSortingEmail(false)
    }
    navigate({
      pathname: path.accounts,
      search: createSearchParams(config).toString()
    })
  }

  const handleSortEmail = () => {
    let config = {}
    if (isSortingEmail) {
      config = {
        ...queryAccountConfig,
        sorting: 'email'
      }
      setIsSortingEmail(false)
    } else {
      config = {
        ...queryAccountConfig,
        sorting: 'email desc'
      }
      setIsSortingEmail(true)
      setIsSortingName(false)
    }
    navigate({
      pathname: path.accounts,
      search: createSearchParams(config).toString()
    })
  }

  return (
    <Fragment>
      <Helmet>
        <title>Accounts</title>
        <meta name='description' content='This is account page of the project' />
      </Helmet>
      <div>
        <div className='flex justify-between items-center pt-[16px] pb-[40px]'>
          <h2 className='text-[24px] text-gray-900 font-bold'>Accounts</h2>
          <Link
            to={path.create_account}
            state={queryAccountConfig}
            className='text-[14px] font-semibold text-white bg-[#16a34a] px-4 py-2 rounded-lg'
          >
            New account
          </Link>
        </div>
        <div className='w-full border-[1px] border-gray-200 bg-white p-2 rounded-t-lg flex justify-end'>
          <form>
            <InputSearch
              classNameInput={
                'bg-white border-[1px] border-gray-200 rounded-lg h-[40px] w-[240px] outline-[#22c55e] pl-8 pr-2 shadow-sm'
              }
              name='name'
              register={SearchForm.register}
            />
          </form>
        </div>
        <AccountTable
          accounts={accounts}
          handleSortEmail={handleSortEmail}
          handleSortName={handleSortName}
          isSortingName={isSortingName}
          isSortingEmail={isSortingEmail}
          queryAccountConfig={queryAccountConfig}
        />
        <div className='w-full border-x-[1px] border-b-[1px] border-gray-200 bg-white p-4 rounded-b-lg flex items-center justify-between'>
          <div className=' text-[14px] font-semibold'>
            Showing <span>1</span> to <span>10</span> of <span>25</span> results
          </div>
          <form>
            <div className='flex items-center'>
              <select
                id='page_size'
                className='border-[1px] border-gray-200 px-2 py-1 rounded-lg'
                {...SelectedForm.register('size')}
                onChange={SelectedForm.handleChangeOption}
              >
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
                <option value='20'>20</option>
              </select>
              <span className='ml-2'>per page</span>
            </div>
          </form>
          <Pagination queryConfig={queryAccountConfig} pageSize={AccountsListQuery.data?.data.totalPages as number} />
        </div>
      </div>
    </Fragment>
  )
}

export default Accounts
