export interface ProductImageFormat {
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

export interface ProductImage {
  id: number
  documentId: string
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  formats: {
    small: ProductImageFormat
    medium?: ProductImageFormat
    thumbnail: ProductImageFormat
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: string | null
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface MaterialType {
  id: number
  documentId: string
  material_type: string
  price: number
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  digitalOrder: boolean
  digitalIcon: ProductImage
}

export interface Category {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  name: string
}

export interface Tag {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  name: string
}

export interface BasicInformation {
  id: number
  Height: number
  material: string
  metal_Purity: string
  gross_Weight: number
}

export interface StoneInformation {
  id: number
  stone_name: string
  stone_weight: number
  stone_price: number
}

export interface Product {
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
  other_Stone_Price: number
  gst: number
  stock_Quantity: number
  product_Status: boolean
  bestSeller: boolean
  material_type: MaterialType
  product_Images: ProductImage[]
  category: Category
  tag: Tag
  tags: Tag[]
  basic_Information: BasicInformation
  stone_information: StoneInformation[]
  calculatedPrice: number
  material: string
  item_Height: number
}

export interface SingleProductResponse {
  data: Product
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface MultiProductResponse {
  data: Product[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}
