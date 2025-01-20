import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'
import { Product, SingleProductResponse } from 'src/types/components/product'

function useGetProductData(productId: string | undefined) {
  const [productData, setProductData] = useState<Product>()

  const getProducts = useCallback(async () => {
    try {
      const response = await axios.get<SingleProductResponse>(
        `${import.meta.env.VITE_STRAPI_API}/products/${productId}?populate=*`,
      )
      console.log(response.data)
      setProductData(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }, [productId])

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return [productData]
}

export default useGetProductData
