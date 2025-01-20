import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'
import { MaterialResponse } from 'src/types/components/material'
import { MaterialType } from 'src/types/components/product'

function useGetMaterialPrice({ materialId }: { materialId: string }) {
  const [materialPrice, setMaterialPrice] = useState<MaterialType>()

  const getPrice = useCallback(async () => {
    try {
      const response = await axios.get<MaterialResponse>(
        `${import.meta.env.VITE_STRAPI_API}/material-types/${materialId}`,
      )
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

export default useGetMaterialPrice
