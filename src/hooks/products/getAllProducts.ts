import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'
import { MultiProductResponse, Product } from 'src/types/components/product'
import { ProductsFormInterface } from 'src/types/forms/products-form'

function useGetAllProducts(filters?: ProductsFormInterface) {
  const [productsData, setProductsData] = useState<Product[]>([])

  const getProducts = useCallback(async () => {
    try {
      const productTypeFilters = Object.keys(filters?.productType || {}).filter((key) => filters?.productType?.[key])
      const materialFilters = Object.keys(filters?.materialType || {}).filter((key) => filters?.materialType?.[key])
      const metalTypeFilters = Object.keys(filters?.metalType || {}).filter((key) => filters?.metalType?.[key])
      const metalColorFilters = Object.keys(filters?.metalColor || {}).filter((key) => filters?.metalColor?.[key])
      const genderFilters = Object.keys(filters?.gender || {}).filter((key) => filters?.gender?.[key])

      const { data } = await axios.get<MultiProductResponse>(`${import.meta.env.VITE_STRAPI_API}/products`, {
        params: {
          filters: {
            ...(productTypeFilters.length > 0 && {
              category: {
                name: {
                  $in: productTypeFilters,
                },
              },
            }),
            ...(metalTypeFilters.length > 0 && {
              material_type: {
                material_type: {
                  $in: metalTypeFilters,
                },
              },
            }),
            ...(materialFilters.length > 0 && {
              material: {
                $in: materialFilters,
              },
            }),
            ...(metalColorFilters.length > 0 && {
              metal_Color: {
                $in: metalColorFilters,
              },
            }),
            ...(genderFilters.length > 0 && {
              gender: {
                $in: genderFilters,
              },
            }),
          },
          minPrice: filters?.priceRange?.minPrice || null,
          maxPrice: filters?.priceRange?.maxPrice || null,
          sort: 'calculatedPrice:asc',
          populate: '*',
        },
      })

      setProductsData(data.data)
    } catch (error) {
      console.error(error)
    }
  }, [
    filters?.priceRange?.minPrice,
    filters?.priceRange?.maxPrice,
    filters?.productType,
    filters?.metalType,
    filters?.materialType,
    filters?.metalColor,
    filters?.gender,
  ])

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return [productsData]
}

export default useGetAllProducts
