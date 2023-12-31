import axios, { AxiosError } from 'axios'
import HttpStatusCode from 'src/modules/Share/constants/httpStatusCode.enum'

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  // eslint-disable-next-line import/no-named-as-default-member
  return axios.isAxiosError(error)
}

export function isAxiosNotFound(error: unknown): error is AxiosError<Error> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.NotFound
}

export function isAxiosConflict(error: unknown): error is AxiosError<Error> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.Conflict
}
