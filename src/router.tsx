import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'
import ErrorPage from './components/error-page'
import { getDefaultLayout } from './components/layout'
import Home from './pages/home'
import Auth from './pages/auth'
import ForgotPass from './pages/auth/forgot-pass'
import Loader from './components/layout/loader'
import PrivateRoute from './components/layout/private-route'

const Product = lazy(() => import('./pages/products/product'))
const Products = lazy(() => import('./pages/products/index'))
const Cart = lazy(() => import('./pages/user/cart'))
const Profile = lazy(() => import('./pages/user/profile'))

type PrivateRouteProps = RouteObject & {
  getLayout: boolean
  private?: boolean
}

export const routerObjects: PrivateRouteProps[] = [
  {
    path: '/',
    Component: Home,
    getLayout: true,
  },
  {
    path: '/products',
    Component: Products,
    getLayout: true,
  },
  {
    path: '/products/:productId',
    Component: Product,
    getLayout: true,
  },
  {
    path: '/auth',
    Component: Auth,
    getLayout: false,
  },
  {
    path: '/auth/forgot',
    Component: ForgotPass,
    getLayout: false,
  },
  {
    path: '/cart',
    Component: Cart,
    getLayout: true,
    private: true,
  },
  {
    path: '/profile',
    Component: Profile,
    getLayout: true,
    private: true,
  },
]

export function createRouter(): ReturnType<typeof createBrowserRouter> {
  const routeWrappers = routerObjects.map((router) => {
    const getLayout = router.getLayout ? getDefaultLayout : (page: JSX.Element) => page
    const Component = router.Component
    const page = getLayout(<Suspense fallback={<Loader />}>{Component ? <Component /> : null}</Suspense>)
    return {
      ...router,
      element: router.private ? <PrivateRoute>{page}</PrivateRoute> : page,
      Component: null,
      ErrorBoundary: ErrorPage,
    }
  })
  return createBrowserRouter(routeWrappers)
}
