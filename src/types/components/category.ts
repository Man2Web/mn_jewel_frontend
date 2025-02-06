import { Product } from './product'
import { SubCategory } from './subCategory'

interface Image {
  id: number
  documentId: string
  name: string
  alternativeText: string | null
  caption: string | null
  width: number | null
  height: number | null
  formats: any | null
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: any | null
  createdAt: string
  updatedAt: string
  publishedAt: string
}

interface Category {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  name: string
  homePageView: boolean
  navbarView: boolean
  products: Product[]
  homePageImage: Image
  navBarPngImage: Image
  link: string
  sub_category: SubCategory
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

interface CategoryResponse {
  data: Category[]
  meta: Meta
}

export type { Category, Pagination, Meta, CategoryResponse }
