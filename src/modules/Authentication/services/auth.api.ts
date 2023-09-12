import { AuthResponse } from 'src/modules/Authentication/interfaces/auth.type'
import http from 'src/modules/Share/utils/http'

const authAPI = {
  login: (body: { userNameOrEmail: string; password: string }) => http.post<AuthResponse>('/auth/login', body)
}

export default authAPI
