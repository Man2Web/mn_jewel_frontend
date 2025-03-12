import { MaterialType, Product } from './product'

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

// export interface Product {
//   id: number
//   documentId: string
//   createdAt: string
//   updatedAt: string
//   publishedAt: string
//   product_Name: string
//   sku_Id: string
//   metal_Color: string
//   item_Gross_Weight: number
//   item_Net_Weight: number
//   metal_Certification: string
//   product_Description: string
//   value_Addition: number
//   other_Stone_Price: number
//   gst: number
//   stock_Quantity: number
//   product_Status: boolean
//   bestSeller: boolean
//   material: string
//   gender: string | null
// }

// export interface UserCartResponse {
//   data: {
//     id: number
//     documentId: string
//     createdAt: string
//     updatedAt: string
//     publishedAt: string
//     products: Product[]
//     user: User
//   }
//   meta: Record<string, unknown>
// }
