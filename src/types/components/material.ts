import { Product } from './product'

interface ImageFormat {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string | null
  size: number
  width: number
  height: number
  sizeInBytes: number
}

interface Image {
  id: number
  documentId: string
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  formats: {
    small: ImageFormat
    thumbnail: ImageFormat
  }
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

export interface Material {
  id: number
  documentId: string
  material_type: string
  price: number
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  homepageBanner: Image
  isHomePageBanner: boolean
  isMobileNavbar: boolean
  products: Product[]
  digitalOrder: boolean
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

export interface MultiMaterialResponse {
  data: Material[]
  meta: Meta
}
