import axios from 'axios'
import { useEffect, useState } from 'react'
import { Category, CategoryResponse } from 'src/types/components/category'
import { Material, MultiMaterialResponse } from 'src/types/components/material'
import { SubCategory, SubCategoryResponse } from 'src/types/components/subCategory'

function useGetCategories() {
  const [categoriesData, setCategoriesData] = useState<Category[]>([])
  useEffect(() => {
    getCategoriesData()
  }, [])

  const getCategoriesData = async () => {
    try {
      const response = await axios.get<CategoryResponse>(`${import.meta.env.VITE_STRAPI_API}/categories?populate=*`)
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
      const response = await axios.get<MultiMaterialResponse>(
        `${import.meta.env.VITE_STRAPI_API}/material-types?populate=*`,
      )
      setMaterialData(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }
  return [materialData]
}

function useGetSubCategory() {
  const [subCategoryData, setSubCategoryData] = useState<SubCategory[]>([])
  useEffect(() => {
    getCategoriesData()
  }, [])

  const getCategoriesData = async () => {
    try {
      const response = await axios.get<SubCategoryResponse>(
        `${import.meta.env.VITE_STRAPI_API}/subcategories?populate=*`,
      )
      setSubCategoryData(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }
  return [subCategoryData]
}

export { useGetCategories, useGetTags, useGetMetal, useGetSubCategory }
