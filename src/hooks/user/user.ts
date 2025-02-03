import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { MyContext } from 'src/components/layout/context'
import { User } from 'src/types/components/user'

function useGetUserData() {
  const jwt = localStorage.getItem('token')
  const [userData, setUserData] = useState<User>()
  useEffect(() => {
    if (!jwt) return
    getCartData()
  }, [])
  const getCartData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_STRAPI_API}/users/me?populate=*`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      setUserData(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  return [userData]
}

function useGetUserCartData() {
  const context = useContext(MyContext)
  if (!context) {
    throw new Error('MyContext must be used within a MyContextProvider')
  }
  const { setUserCartData } = context
  const jwt = localStorage.getItem('token')
  const [userData] = useGetUserData()
  useEffect(() => {
    if (!jwt) return
    if (!userData) return
    getCartData(userData?.user_cart.documentId)
  }, [userData])
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
  return { getCartData }
}

function useAddToCart() {
  const context = useContext(MyContext)
  if (!context) {
    throw new Error('MyContext must be used within a MyContextProvider')
  }
  const { userCartData } = context
  const jwt = localStorage.getItem('token')
  const [userData] = useGetUserData()
  const { getCartData } = useGetUserCartData()
  const prevCartItems = userCartData.map((data) => data.id)
  const addProduct = async (productId: number | undefined) => {
    if (!jwt) {
      toast.error('Please login to add product to cart')
      return
    }
    try {
      await axios.put(
        `${import.meta.env.VITE_STRAPI_API}/user-carts/${userData?.user_cart.documentId}`,
        {
          data: {
            products: [...prevCartItems, productId],
          },
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        },
      )
      getCartData(userData?.user_cart.documentId)
    } catch (error) {
      console.error(error)
      toast.error('Error adding product to cart')
    }
  }
  return [addProduct]
}

function useRemoveFromCart() {
  const context = useContext(MyContext)
  if (!context) {
    throw new Error('MyContext must be used within a MyContextProvider')
  }
  const { userCartData } = context
  const jwt = localStorage.getItem('token')
  const [userData] = useGetUserData()
  const { getCartData } = useGetUserCartData()
  const removeProduct = async (productId: number | undefined) => {
    if (!jwt) {
      toast.error('Please login to add product to cart')
      return
    }
    const udpatedCartItems = userCartData.filter((data) => data.id !== productId).map((data) => data.id)
    try {
      await axios.put(
        `${import.meta.env.VITE_STRAPI_API}/user-carts/${userData?.user_cart.documentId}`,
        {
          data: {
            products: [...udpatedCartItems],
          },
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        },
      )
      getCartData(userData?.user_cart.documentId)
    } catch (error) {
      console.error(error)
      toast.error('Error adding product to cart')
    }
  }
  return [removeProduct]
}

export { useGetUserData, useAddToCart, useGetUserCartData, useRemoveFromCart }
