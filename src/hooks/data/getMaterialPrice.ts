import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'
import { MaterialType } from 'src/types/components/product'

function useGetMaterialPriceById({ materialId }: { materialId: string }) {
  const [materialPrice, setMaterialPrice] = useState<MaterialType>()

  const getPrice = useCallback(async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_STRAPI_API}/material-types/${materialId}`)
      setMaterialPrice(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }, [materialId])

  useEffect(() => {
    getPrice()
  }, [getPrice])

  return [materialPrice]
}

function useGetMaterialPrice() {
  const [materialPrice, setMaterialPrice] = useState<MaterialType[]>([])

  const getPrice = useCallback(async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_STRAPI_API}/material-types`, {
        params: {
          populate: '*',
        },
      })
      setMaterialPrice(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    getPrice()
  }, [getPrice])

  return [materialPrice]
}

export { useGetMaterialPriceById, useGetMaterialPrice }
