import path from '../constants/path'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { Suspense, lazy, useContext } from 'react'
import { AppContext } from '../contexts/app.context'
import MainLayout from '../layouts/MainLayout'
import LoginLayout from '../layouts/LoginLayout'

const Login = lazy(() => import('../pages/Login'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Accounts = lazy(() => import('../pages/Accounts'))
const Contacts = lazy(() => import('../pages/Contacts'))
const Leads = lazy(() => import('../pages/Leads'))
const Deals = lazy(() => import('../pages/Deals'))
const Products = lazy(() => import('../pages/Products'))
const Users = lazy(() => import('../pages/Users'))
const NotFound = lazy(() => import('../pages/NotFound'))
const CreateAccount = lazy(() => import('src/pages/Accounts/components/CreateAccount'))
const EditAccount = lazy(() => import('src/pages/Accounts/components/EditAccount'))

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
