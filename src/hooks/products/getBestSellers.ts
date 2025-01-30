import axios from 'axios'
import { useEffect, useState } from 'react'
import { Product, MultiProductResponse } from 'src/types/components/product'

function useBestSellerHook() {
  const [productsData, setProductsData] = useState<Product[]>([])
  useEffect(() => {
    getProducts()
  }, [])
  const getProducts = async () => {
    try {
      const response = await axios.get<MultiProductResponse>(
        `${import.meta.env.VITE_STRAPI_API}/products?filters[bestSeller][$eq]=true&populate=*`,
      )
      setProductsData(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }
  return [productsData]
}

export default useBestSellerHook
