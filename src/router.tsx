import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'
import ErrorPage from './components/error-page'
import { getDefaultLayout } from './components/layout'
import Auth from './pages/auth'
import ForgotPass from './pages/auth/forgot-pass'
import Loader from './components/layout/loader'
import PrivateRoute from './components/layout/private-route'
import RefundPolicy from './pages/policies/refund'
import ReturnPolicy from './pages/policies/return'
import TermsAndConditions from './pages/policies/terms-conditions'
import PrivacyPolicy from './pages/policies/privacy'
import ShippingAndDelivery from './pages/policies/shipping-delivery'
import About from './pages/policies/about'
import ContactUs from './pages/policies/contact'
import FAQ from './pages/policies/faq'
import Favourites from './pages/user/favourites'
import VideoShopping from './components/home/video-shopping'
import CommingSoon from './components/elements/coming-soon'
import BookingConfirmation from './pages/booking/confirmation'
import BookingFailureConfirmation from './pages/booking/failure'

const Home = lazy(() => import('./pages/home'))
const Product = lazy(() => import('./pages/products/product'))
const Products = lazy(() => import('./pages/products/index'))
const Cart = lazy(() => import('./pages/user/cart'))
const Profile = lazy(() => import('./pages/user/profile'))
const Orders = lazy(() => import('./pages/user/orders'))

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
    path: '/favourites',
    Component: Favourites,
    getLayout: true,
    private: true,
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
  {
    path: '/orders',
    Component: Orders,
    getLayout: true,
    private: true,
  },
  {
    path: '/refund',
    Component: RefundPolicy,
    getLayout: true,
  },
  {
    path: '/return',
    Component: ReturnPolicy,
    getLayout: true,
  },
  {
    path: '/shipping',
    Component: ShippingAndDelivery,
    getLayout: true,
  },
  {
    path: '/terms',
    Component: TermsAndConditions,
    getLayout: true,
  },
  {
    path: '/privacy',
    Component: PrivacyPolicy,
    getLayout: true,
  },
  {
    path: '/about',
    Component: About,
    getLayout: true,
  },
  {
    path: '/contact',
    Component: ContactUs,
    getLayout: true,
  },
  {
    path: '/faq',
    Component: FAQ,
    getLayout: true,
  },
  {
    path: '/videoshopping',
    Component: VideoShopping,
    getLayout: true,
  },
  {
    path: '/commingsoon',
    Component: CommingSoon,
    getLayout: true,
  },
  {
    path: '/bookingsuccess',
    Component: BookingConfirmation,
    getLayout: true,
    private: true,
  },
  {
    path: '/bookingfailed',
    Component: BookingFailureConfirmation,
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
