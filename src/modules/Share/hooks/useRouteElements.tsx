import path from '../constants/path'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { Suspense, lazy, useContext } from 'react'
import { AppContext } from '../contexts/app.context'
import MainLayout from '../layouts/MainLayout'
import LoginLayout from '../layouts/LoginLayout'

const Login = lazy(() => import('../../Authentication/pages/Login'))

const Dashboard = lazy(() => import('../../Home/pages'))

const Accounts = lazy(() => import('../../Account/pages/Account'))
const CreateAccount = lazy(() => import('src/modules/Account/pages/CreateAccount'))
const EditAccount = lazy(() => import('src/modules/Account/pages/EditAccount'))

const Contacts = lazy(() => import('../../Contact/pages'))
const Leads = lazy(() => import('../../Lead/pages'))
const Deals = lazy(() => import('../../Deal/pages'))
const Products = lazy(() => import('../../Product/pages'))
const Users = lazy(() => import('../../User/pages'))
const NotFound = lazy(() => import('../../NotFound/pages'))

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to={path.login} />
}

const RejectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to={path.home} />
}

const useRouteElements = () => {
  const routeElements = useRoutes([
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: path.login,
          element: (
            <LoginLayout>
              <Suspense>
                <Login />
              </Suspense>
            </LoginLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: path.home,
          element: (
            <MainLayout>
              <Suspense>
                <Dashboard />
              </Suspense>
            </MainLayout>
          )
        },
        {
          path: path.accounts,
          element: (
            <MainLayout>
              <Suspense>
                <Accounts />
              </Suspense>
            </MainLayout>
          )
        },
        {
          path: path.create_account,
          element: (
            <MainLayout>
              <Suspense>
                <CreateAccount />
              </Suspense>
            </MainLayout>
          )
        },
        {
          path: path.edit_account,
          element: (
            <MainLayout>
              <Suspense>
                <EditAccount />
              </Suspense>
            </MainLayout>
          )
        },
        {
          path: path.contacts,
          element: (
            <MainLayout>
              <Suspense>
                <Contacts />
              </Suspense>
            </MainLayout>
          )
        },
        {
          path: path.leads,
          element: (
            <MainLayout>
              <Suspense>
                <Leads />
              </Suspense>
            </MainLayout>
          )
        },
        {
          path: path.deals,
          element: (
            <MainLayout>
              <Suspense>
                <Deals />
              </Suspense>
            </MainLayout>
          )
        },
        {
          path: path.products,
          element: (
            <MainLayout>
              <Suspense>
                <Products />
              </Suspense>
            </MainLayout>
          )
        },
        {
          path: path.users,
          element: (
            <MainLayout>
              <Suspense>
                <Users />
              </Suspense>
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '*',
      element: (
        <Suspense>
          <NotFound />
        </Suspense>
      )
    }
  ])
  return routeElements
}

export default useRouteElements
