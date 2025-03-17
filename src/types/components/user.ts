import { MaterialType, Product } from './product'
import { Scheme } from './schemes'

export interface User {
  id: number
  documentId: string
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked: boolean
  createdAt: string
  updatedAt: string
  publishedAt: string
  userCart: Product[]
  favourites: Product[]
  orders: orderItemInterface[]
  totalGoldGrams: number
  totalGoldRedeemed: number
  totalSilverGrams: number
  totalSilverRedeemed: number
  digital_orders: digitalOrder[]
}

export interface UserCartData {
  product: Product
  quantity: number
}

export interface digitalOrder {
  id: number
  documentId: string
  orderPrice: number
  grams: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  paymentStatus: string
  transactionType: string
  user: User
  material_type: MaterialType
  goldPrice: number
  transactionId: string
}

export interface orderItemInterface {
  id: number
  documentId: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  totalPrice: number
  products: UserCartData[]
  userAddress: {
    id: number
    email: string
    phoneNumber: string
    name: string
    address: string
    city: string
    pincode: string
  }
  orderStatus: boolean
}

export interface UserSchemesInterface {
  id: number
  documentId: string
  schemeStatus: string
  paymentsLeft: number
  amountPaid: string
  planCompleted: boolean
  createdAt: string
  updatedAt: string
  publishedAt: string
  scheme: Scheme
}
