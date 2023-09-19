import http from 'src/modules/Share/utils/http'
import { Contact, ContactListConfig } from '../interfaces/contact.type'

const contactAPI = {
  getListContacts: (params: ContactListConfig) =>
    http.get<{ totalPages: number; data: Contact[] }>('/contacts', { params }),

  createContact: (body: Omit<Contact, 'id'>) => http.post<Contact>('/contacts', body),

  getContact: (id: string) => http.get<Contact>(`/contacts/${id}`),

  editContact: (body: { id: string; data: Omit<Contact, 'id'> }) =>
    http.put<Contact>(`/contacts/${body.id}`, body.data),

  deleteContact: (id: string) => http.delete(`/contacts/${id}`)
}

export default contactAPI
