import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MultiProductResponse, Product } from 'src/types/components/product'
import { ProductsFormInterface, ProductsFormInterfaceParams } from 'src/types/forms/products-form'

function useGetAllProducts(filters?: ProductsFormInterface) {
  const [productsData, setProductsData] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [searchParams] = useSearchParams()
  const productName = searchParams.get('productName')
  const getProducts = useCallback(async () => {
    try {
      setLoading(true)
      const productTypeFilters = Object.keys(filters?.productType || {}).filter((key) => filters?.productType?.[key])
      const SubProductTypeFilters = Object.keys(filters?.subCategory || {}).filter((key) => filters?.subCategory?.[key])
      const materialFilters = Object.keys(filters?.materialType || {}).filter((key) => filters?.materialType?.[key])
      const metalTypeFilters = Object.keys(filters?.metalType || {}).filter((key) => filters?.metalType?.[key])
      const metalColorFilters = Object.keys(filters?.metalColor || {}).filter((key) => filters?.metalColor?.[key])
      const genderFilters = Object.keys(filters?.gender || {}).filter((key) => filters?.gender?.[key])
      const params: ProductsFormInterfaceParams = {
        populate: '*',
      }

      if (productName) {
        params.filters = {
          ...params.filters,
          product_Name: {
            $containsi: productName,
          },
        }
      }

      if (productTypeFilters.length > 0) {
        params.filters = {
          ...params.filters,
          category: {
            name: {
              $in: productTypeFilters,
            },
          },
        }
      }

      if (SubProductTypeFilters.length > 0) {
        params.filters = {
          ...params.filters,
          sub_category: {
            name: {
              $in: SubProductTypeFilters,
            },
          },
        }
      }

      // if (productTypeFilters.length > 0 || productType) {
      //   params.filters = {
      //     ...params.filters,
      //     category: {
      //       name: {
      //         $in: productTypeFilters.length > 0 ? productTypeFilters : productType ? [productType] : [],
      //       },
      //     },
      //   }
      // }

      if (metalTypeFilters.length > 0) {
        params.filters = {
          ...params.filters,
          material_type: {
            material_type: {
              $in: metalTypeFilters,
            },
          },
        }
      }

      if (materialFilters.length > 0) {
        params.filters = {
          ...params.filters,
          material: {
            $in: materialFilters,
          },
        }
      }

      if (metalColorFilters.length > 0) {
        params.filters = {
          ...params.filters,
          metal_Color: {
            $in: metalColorFilters,
          },
        }
      }

      if (genderFilters.length > 0) {
        params.filters = {
          ...params.filters,
          gender: {
            $in: genderFilters,
          },
        }
      }

      if (filters?.priceRange?.minPrice != null) {
        params.minPrice = filters.priceRange.minPrice
      }

      if (filters?.priceRange?.maxPrice != null) {
        params.maxPrice = filters.priceRange.maxPrice
      }

      if (filters?.sortOption) {
        params.sort = `${
          filters.sortOption === 'bestsellers'
            ? 'bestSeller:desc'
            : filters.sortOption === 'price-low'
            ? 'calculatedPrice:asc'
            : 'calculatedPrice:desc'
        }`
      }

      const { data } = await axios.get<MultiProductResponse>(`${import.meta.env.VITE_STRAPI_API}/products`, {
        params,
      })

      setProductsData(data.data)
    } catch (error) {
      console.error(error)
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }, [
    filters?.priceRange?.minPrice,
    filters?.priceRange?.maxPrice,
    filters?.productType,
    filters?.metalType,
    filters?.materialType,
    filters?.metalColor,
    filters?.gender,
    filters?.sortOption,
    filters?.subCategory,
    searchParams,
  ])

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return { productsData, loading }
}

export default useGetAllProducts
