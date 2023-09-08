import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'

const authAPI = {
  login: (body: { userNameOrEmail: string; password: string }) => http.post<AuthResponse>('/auth/login', body)
}

export default authAPI
