import axios from 'axios'
import { useEffect, useState } from 'react'
import { Product } from 'src/types/components/product'
import { User } from 'src/types/components/user'

function useGetUserData() {
  const jwt = localStorage.getItem('token')
  const [userData, setUserData] = useState<User>()
  useEffect(() => {
    if (!jwt) return
    getCartData()
  })
  const getCartData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_STRAPI_API}/users/me?populate=*`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      console.log(response.data)
      setUserData(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  return [userData]
}

function useGetUserCartData() {
  const jwt = localStorage.getItem('token')
  const [userCartData, setUserCartData] = useState<Product[]>([])
  const [userData] = useGetUserData()
  useEffect(() => {
    if (!jwt) return
    if (!userData) return
    getCartData(userData?.user_cart.documentId)
  })
  const getCartData = async (userCartId: string | undefined) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_STRAPI_API}/user-carts/${userCartId}?populate=*`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      setUserCartData(response.data.data.products)
    } catch (error) {
      console.error(error)
    }
  }
  return [userCartData]
}

function useAddToCart() {
  const jwt = localStorage.getItem('token')
  if (!jwt) window.location.href = '/auth'
  const [userData] = useGetUserData()
  const addProduct = async (productId: number | undefined) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_STRAPI_API}/user-carts/${userData?.user_cart.documentId}`,
        {
          data: {
            products: [productId],
          },
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        },
      )
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
  return [addProduct]
}

export { useGetUserData, useAddToCart, useGetUserCartData }
