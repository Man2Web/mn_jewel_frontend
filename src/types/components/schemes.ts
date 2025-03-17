import { ProductImage } from './product'

export interface Scheme {
  id: number
  documentId: string
  name: string
  planDescription: string
  planDuration: number
  minAmount: string
  redemptionDescription: string
  termsAndConditions: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  vatChargeable: boolean
  gstChargeable: boolean
  logo: ProductImage
  bannerImage: ProductImage
}

export interface SchemeTransaction {
  id: number
  documentId: string
  amountPaid: string
  paymentStatus: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  transactionId: string
  scheme: Scheme
}
