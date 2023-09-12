export interface Account {
  id: string
  email: string
  name: string
  address: string
  phone: string
  totalSales: number
}

export interface AccountListConfig {
  name?: string
  sorting?: string
  page?: number
  size?: number
}
