import { Category } from './category'

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

interface Product {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  product_Name: string
  sku_Id: string
  metal_Color: string
  item_Gross_Weight: number
  item_Net_Weight: number
  metal_Certification: string
  product_Description: string
  value_Addition: number
  gst: number
  stock_Quantity: number
  product_Status: boolean
  bestSeller: boolean
  material: string
  gender: string
  item_Height: number
}

interface SubCategory {
  id: number
  documentId: string
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  category: Category
  products: Product[]
  png_Image: Image
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

interface SubCategoryResponse {
  data: SubCategory[]
  meta: Meta
}

export type { SubCategory, Pagination, Meta, SubCategoryResponse }
