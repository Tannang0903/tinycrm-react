import { useContext, useEffect } from 'react'
import useRouteElements from './modules/Share/hooks/useRouteElements'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AppContext } from './modules/Share/contexts/app.context'
import { LocalStorageEventTarget } from './modules/Share/utils/auth'

const App = () => {
  const RouteElements = useRouteElements()

  const { reset } = useContext(AppContext)

  useEffect(() => {
    LocalStorageEventTarget.addEventListener('clearToken', reset)
    return () => {
      LocalStorageEventTarget.removeEventListener('clearToken', reset)
    }
  })

  return (
    <div>
      {RouteElements}
      <ToastContainer />
    </div>
  )
}

export default App
