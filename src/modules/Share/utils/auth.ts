export const setAccessTokenToLS = (access_token: string) => {
  localStorage.setItem('access_token', access_token)
}

export const getAccessTokenFromLS = () => {
  return localStorage.getItem('access_token') || ''
}

export const LocalStorageEventTarget = new EventTarget()

export const clearTokenFromLS = () => {
  localStorage.removeItem('access_token')
  const clearTokenEvent = new Event('clearToken')
  LocalStorageEventTarget.dispatchEvent(clearTokenEvent)
}
