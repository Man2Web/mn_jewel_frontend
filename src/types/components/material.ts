import { Product } from './product'

interface Material {
  id: number
  documentId: string
  material_type: string
  price: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  products: Product[]
}

interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

interface Meta {
  pagination: Pagination
}

export interface MaterialResponse {
  data: Material
  meta: Meta
}
