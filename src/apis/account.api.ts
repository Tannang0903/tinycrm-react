import { Account, AccountListConfig } from 'src/types/account.type'
import http from 'src/utils/http'

const accountAPI = {
  getListAccounts: (params: AccountListConfig) =>
    http.get<{ totalPages: number; data: Account[] }>('/accounts', { params }),

  createAccount: (body: Omit<Account, 'id' | 'totalSales'>) => http.post<Account>('/accounts', body),

  getAccount: (id: string) => http.get<Account>(`/accounts/${id}`),

  editAccount: (body: { id: string; data: Omit<Account, 'id' | 'totalSales'> }) =>
    http.put<Account>(`/accounts/${body.id}`, body.data),

  deleteAccount: (id: string) => http.delete(`/accounts/${id}`)
}

export default accountAPI
