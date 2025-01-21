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
