interface Category {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  name: string
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
