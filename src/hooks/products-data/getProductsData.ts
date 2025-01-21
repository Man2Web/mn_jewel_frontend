import axios from 'axios'
import { useEffect, useState } from 'react'
import { Category, CategoryResponse } from 'src/types/components/category'
import { Material, MultiMaterialResponse } from 'src/types/components/material'

function useGetCategories() {
  const [categoriesData, setCategoriesData] = useState<Category[]>([])
  useEffect(() => {
    getCategoriesData()
  }, [])

  const getCategoriesData = async () => {
    try {
      const response = await axios.get<CategoryResponse>(`${import.meta.env.VITE_STRAPI_API}/categories`)
      setCategoriesData(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }
  return [categoriesData]
}

function useGetTags() {
  const [tagsData, setTagsData] = useState<Category[]>([])
  useEffect(() => {
    getCategoriesData()
  }, [])

  const getCategoriesData = async () => {
    try {
      const response = await axios.get<CategoryResponse>(`${import.meta.env.VITE_STRAPI_API}/tags`)
      setTagsData(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }
  return [tagsData]
}

function useGetMetal() {
  const [materialData, setMaterialData] = useState<Material[]>([])
  useEffect(() => {
    getCategoriesData()
  }, [])

  const getCategoriesData = async () => {
    try {
      const response = await axios.get<MultiMaterialResponse>(`${import.meta.env.VITE_STRAPI_API}/material-types`)
      setMaterialData(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }
  return [materialData]
}

export { useGetCategories, useGetTags, useGetMetal }
