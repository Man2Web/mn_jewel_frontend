export interface ProductsFormInterface {
  sortOption: string
  productType: {
    [key: string]: boolean
  }
  materialType: {
    [key: string]: boolean
  }
  metalType: {
    [key: string]: boolean
  }
  metalColor: {
    [key: string]: boolean
  }
  priceRange: {
    minPrice: number
    maxPrice: number
  }
  gender: {
    [key: string]: boolean
  }
  ocassion: {
    [key: string]: boolean
  }
}

export interface ProductsFormInterfaceParams {
  populate: string
  filters?: {
    category?: {
      name: {
        $in: string[]
      }
    }
    material_type?: {
      material_type: {
        $in: string[]
      }
    }
    material?: {
      $in: string[]
    }
    metal_Color?: {
      $in: string[]
    }
    gender?: {
      $in: string[]
    }
  }
  minPrice?: number | null
  maxPrice?: number | null
  sort?: string
}
