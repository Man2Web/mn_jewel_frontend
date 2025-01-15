interface ProductsFormInterface {
  sortOption: string
  productType: {
    bracelet: boolean
    earrings: boolean
    chains: boolean
    rings: boolean
  }
  materialType: {
    gold: boolean
    silver: boolean
    diamond: boolean
  }
  metalType: {
    gold18: boolean
    gold22: boolean
    gold24: boolean
  }
  metalColor: {
    yellowGold: boolean
    roseGold: boolean
    whiteGold: boolean
  }
  priceRange: {
    minPrice: number
    maxPrice: number
  }
  gender: {
    men: boolean
    women: boolean
    girl: boolean
    boy: boolean
  }
  ocassionType: {
    wedding: boolean
    engagement: boolean
    anniversary: boolean
    birthday: boolean
    festival: boolean
  }
}
