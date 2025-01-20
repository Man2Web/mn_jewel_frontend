// Define types for the `formats` property
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

interface ImageFormats {
  small?: ImageFormat
  medium?: ImageFormat
  thumbnail?: ImageFormat
  large?: ImageFormat
}

// Define types for `cover_img`
interface CoverImage {
  id: number
  documentId: string
  name: string
  alternativeText: string | null
  caption: string | null
  width: number | null
  height: number | null
  formats: ImageFormats | null
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: Record<string, unknown> | null
  createdAt: string
  updatedAt: string
  publishedAt: string
}

// Define types for each `data` entry
interface HomeBanner {
  id: number
  documentId: string
  url: string
  alt_text: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  cover_img: CoverImage
}

// Define types for `meta` pagination
interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

interface Meta {
  pagination: Pagination
}

// Wrap the entire API response
interface ApiResponse<T> {
  data: T
  meta: Meta
}

interface HomeData {
  banners: HomeBanner[]
}

type HomeResponse = ApiResponse<HomeData>

export type { HomeResponse, ApiResponse, Meta, Pagination }
