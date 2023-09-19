export interface Contact {
  id: string
  name: string
  email: string
  phone: string
  accountId: number
}

export interface ContactListConfig {
  name?: string
  sorting?: string
  page?: number
  size?: number
  id?: string
}
