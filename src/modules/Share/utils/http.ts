import axios, { AxiosError, type AxiosInstance } from 'axios'
import HttpStatusCode from 'src/modules/Share/constants/httpStatusCode.enum'
import config from 'src/modules/Share/constants/config'
import { clearTokenFromLS, getAccessTokenFromLS, setAccessTokenToLS } from './auth'
import { AuthResponse } from 'src/modules/Authentication/interfaces/auth.type'

class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    this.accessToken = getAccessTokenFromLS()
    this.instance = axios.create({
      baseURL: config.baseUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.Authorization = `Bearer ${this.accessToken}`
          return config
        }
        return config
      },
      (err) => {
        return Promise.reject(err)
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === '/auth/login') {
          const data = response.data as AuthResponse
          this.accessToken = data.accessToken
          setAccessTokenToLS(this.accessToken)
        }
        return response
      },
      (error: AxiosError) => {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any | undefined = error.response?.data
          const message = data?.message || error.message
          console.log(message)
        }
        if (error.response?.status === HttpStatusCode.Unauthorized) {
          clearTokenFromLS()
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
