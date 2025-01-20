import axios from 'axios'
import { useEffect, useState } from 'react'
import { MultiProductResponse, Product } from 'src/types/components/product'

function useGetAllProducts() {
  const [productsData, setProductsData] = useState<Product[]>([])
  useEffect(() => {
    getProducts()
  }, [])
  const getProducts = async () => {
    try {
      const response = await axios.get<MultiProductResponse>(`${import.meta.env.VITE_STRAPI_API}/products?populate=*`)
      setProductsData(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }
  return [productsData]
}

export default useGetAllProducts
