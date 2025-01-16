import { createBrowserRouter, RouteObject } from 'react-router-dom'
import ErrorPage from './components/error-page'
import { getDefaultLayout } from './components/layout'
import Home from './pages/home'
import Products from './pages/products'
import Product from './pages/products/product'
import Auth from './pages/auth'
import ForgotPass from './pages/auth/forgot-pass'

type PrivateRouteProps = RouteObject & {
  getLayout: boolean
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
]

export function createRouter(): ReturnType<typeof createBrowserRouter> {
  const routeWrappers = routerObjects.map((router) => {
    const getLayout = router.getLayout ? getDefaultLayout : (page: JSX.Element) => page
    const Component = router.Component!
    const page = getLayout(<Component />)
    return {
      ...router,
      element: page,
      Component: null,
      ErrorBoundary: ErrorPage,
    }
  })
  return createBrowserRouter(routeWrappers)
}
