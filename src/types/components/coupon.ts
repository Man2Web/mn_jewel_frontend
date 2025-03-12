import { Product } from './product'

export interface Coupon {
  id: number
  documentId: string
  couponName: string
  minCartValue: number
  couponDescription: string
  isActive: boolean
  startDate: string
  endDate: string
  couponType: string
  couponRate: number
  couponLimit: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  products: Product[]
}
