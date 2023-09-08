import { yupResolver } from '@hookform/resolvers/yup'
import { useQuery } from '@tanstack/react-query'
import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import accountAPI from 'src/apis/account.api'
import InputSearch from 'src/components/InputSearch'
import Pagination from 'src/components/Pagination'
import path from 'src/constants/path'
import useQueryConfig, { QueryAccountConfig } from 'src/hooks/useQueryConfig'
import useSearch from 'src/hooks/useSearch'
import { Account, AccountListConfig } from 'src/types/account.type'
import { OptionPageSizeSchema } from 'src/utils/rules'

const Accounts = () => {
  const queryAccountConfig = useQueryConfig()

  const navigate = useNavigate()

  const FormSearch = useSearch()

  const { register } = useForm<QueryAccountConfig>({
    defaultValues: {
      size: '10'
    },
    resolver: yupResolver(OptionPageSizeSchema)
  })

  const AccountsListQuery = useQuery({
    queryKey: ['accounts', queryAccountConfig],
    queryFn: () => accountAPI.getListAccounts(queryAccountConfig as AccountListConfig),
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })

  const listAccounts = AccountsListQuery.data?.data.data as Account[]

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

  const handleSortName = () => {
    const config = {
      ...queryAccountConfig,
      sorting: 'name'
    }
    navigate({
      pathname: path.accounts,
      search: createSearchParams(config).toString()
    })
  }

  const handleSortEmail = () => {
    const config = {
      ...queryAccountConfig,
      sorting: 'email'
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
        <meta name='description' content='Đây là trang account của dự án' />
      </Helmet>
      <div>
        <div className='flex justify-between items-center pt-[16px] pb-[40px]'>
          <h2 className='text-[24px] text-gray-900 font-bold'>Accounts</h2>
          <Link
            to={path.create_account}
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
              register={FormSearch.register}
            />
          </form>
        </div>
        <table className='w-full text-left border-x-[1px] border-gray-200 p-2 bg-white'>
          <thead className='bg-[#f7f8f9]'>
            <tr className='text-[14px] text-gray-600 border-b-[1px] border-gray-200'>
              <th className='w-4 px-4'>
                <input type='checkbox' name='' id='' className='w-4 h-4 outline-none' />
              </th>
              <th className='px-4 py-2 font-medium' onClick={handleSortName}>
                Name
              </th>
              <th className='px-4 py-2 font-medium' onClick={handleSortEmail}>
                Email
              </th>
              <th className='px-4 py-2 font-medium'>Total Sales</th>
              <th className='w-[80px]'></th>
            </tr>
          </thead>
          <tbody>
            {listAccounts &&
              listAccounts.map((account) => (
                <tr className='text-[14px] text-gray-600 border-b-[1px] border-gray-200' key={account.id}>
                  <th className='w-4 px-4'>
                    <input type='checkbox' name='' id='' className='w-4 h-4 outline-none' />
                  </th>
                  <th className='px-4 py-4 font-medium'>{account.name}</th>
                  <th className='px-4 py-4 font-medium'>{account.email}</th>
                  <th className='px-4 py-4 font-medium'>{account.totalSales}</th>
                  <th className='px-4 py-4 font-medium'>
                    <Link
                      to={`${path.accounts}/${account.id}`}
                      className='w-[80px] flex items-center justify-center text-[#16a34a] hover:text-[#22c55e]'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-4 h-4 mr-2'
                      >
                        <path d='M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z' />
                      </svg>
                      <span className='hover:underline'>Edit</span>
                    </Link>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
        <div className='w-full border-x-[1px] border-b-[1px] border-gray-200 bg-white p-4 rounded-b-lg flex items-center justify-between'>
          <div className=' text-[14px] font-semibold'>
            Showing <span>1</span> to <span>10</span> of <span>25</span> results
          </div>
          <form>
            <div className='flex items-center'>
              <select
                id='page_size'
                className='border-[1px] border-gray-200 px-2 py-1 rounded-lg'
                {...register('size')}
                onChange={handleChangeOption}
              >
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
                <option value='20'>20</option>
              </select>
              <span className='ml-2'>per</span>
            </div>
          </form>
          <Pagination
            queryConfig={queryAccountConfig}
            pageSize={AccountsListQuery.data?.data.totalPages as number}
          ></Pagination>
        </div>
      </div>
    </Fragment>
  )
}

export default Accounts
