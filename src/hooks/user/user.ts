import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { MyContext } from 'src/components/layout/context'
import { orderItemInterface, User, UserCartData } from 'src/types/components/user'

function useGetUserData() {
  const jwt = localStorage.getItem('token')
  const [userData, setUserData] = useState<User>()
  const context = useContext(MyContext)
  if (!context) {
    throw new Error('MyContext must be used within a MyContextProvider')
  }
  const { setUserCartData, setUserFavouritesData } = context
  useEffect(() => {
    if (!jwt) return
    getUserData()
  }, [])
  const getUserData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_STRAPI_API}/users/me?populate=*`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      setUserData(response.data)
      setUserCartData(response.data.userCart)
      setUserFavouritesData(response.data.favourites)
    } catch (error) {
      console.error(error)
    }
  }
  return { userData, getUserData }
}

function useAddToCart() {
  const context = useContext(MyContext)
  if (!context) {
    throw new Error('MyContext must be used within a MyContextProvider')
  }
  const { userCartData } = context
  const jwt = localStorage.getItem('token')
  const { userData, getUserData } = useGetUserData()
  const prevCartItems = userCartData.map((data) => data.id)
  const addProduct = async (productId: number | undefined) => {
    if (!jwt) {
      toast.error('Please login to add product to cart')
      return
    }
    try {
      await axios.put(
        `${import.meta.env.VITE_STRAPI_API}/users/${userData?.id}?populate=*`,
        {
          userCart: [...prevCartItems, productId],
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json',
          },
        },
      )
      getUserData()
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
  const { userData, getUserData } = useGetUserData()
  const removeProduct = async (productId: number | undefined) => {
    if (!jwt) {
      toast.error('Please login to remove product from cart')
      return
    }
    const updatedCartItems = userCartData.filter((data) => data.id !== productId).map((data) => data.id)
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_STRAPI_API}/users/${userData?.id}?populate=*`,
        {
          userCart: updatedCartItems,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json',
          },
        },
      )
      getUserData()
    } catch (error) {
      console.error(error)
      toast.error('Error removing product from cart')
    }
  }
  return [removeProduct]
}

function useAddToFavourites() {
  const context = useContext(MyContext)
  if (!context) {
    throw new Error('MyContext must be used within a MyContextProvider')
  }
  const { userFavouritesData } = context
  const jwt = localStorage.getItem('token')
  const { userData, getUserData } = useGetUserData()
  const prevFavourites = userFavouritesData.map((data) => data.id)
  const addProduct = async (productId: number | undefined) => {
    if (!jwt) {
      toast.error('Please login to add product to favourites')
      return
    }
    try {
      await axios.put(
        `${import.meta.env.VITE_STRAPI_API}/users/${userData?.id}?populate=*`,
        {
          favourites: [...prevFavourites, productId],
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json',
          },
        },
      )
      getUserData()
    } catch (error) {
      console.error(error)
      toast.error('Error adding product to favourites')
    }
  }
  return [addProduct]
}

function useRemoveFromFavourites() {
  const context = useContext(MyContext)
  if (!context) {
    throw new Error('MyContext must be used within a MyContextProvider')
  }
  const { userFavouritesData } = context
  const jwt = localStorage.getItem('token')
  const { userData, getUserData } = useGetUserData()
  const removeProduct = async (productId: number | undefined) => {
    if (!jwt) {
      toast.error('Please login to remove product from favourites')
      return
    }
    const updatedFavourites = userFavouritesData.filter((data) => data.id !== productId).map((data) => data.id)
    try {
      await axios.put(
        `${import.meta.env.VITE_STRAPI_API}/users/${userData?.id}?populate=*`,
        {
          favourites: updatedFavourites,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json',
          },
        },
      )
      getUserData()
    } catch (error) {
      console.error(error)
      toast.error('Error removing product from favourites')
    }
  }
  return [removeProduct]
}

const useUserCartData = () => {
  const context = useContext(MyContext)
  if (!context) {
    throw new Error('MyContext must be used within a MyContextProvider')
  }
  const { userCartData } = context
  const userCartItems = userCartData.map((data) => data.documentId)

  const [userCartProducts, setUserCartProducts] = useState<UserCartData[]>([])

  useEffect(() => {
    if (userCartItems.length === 0) return

    const getProductsData = async () => {
      try {
        const responses = await Promise.all(
          userCartItems.map((id) => axios.get(`${import.meta.env.VITE_STRAPI_API}/products/${id}?populate=*`)),
        )
        const products = responses.map((response) => ({ product: response.data.data, quantity: 1 }))
        setUserCartProducts(products)
      } catch (error) {
        console.error(error)
      }
    }

    getProductsData()
  }, [])

  return { userCartProducts, setUserCartProducts }
}

const useGetOrderData = (orderId: string) => {
  const jwt = localStorage.getItem('token')
  const [orderData, setOrderData] = useState<orderItemInterface>()
  useEffect(() => {
    if (!jwt) return
    getProductsData()
  }, [orderId])

  const getProductsData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_STRAPI_API}/orders/${orderId}?populate[products][populate]=*&populate[userAddress]=*`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json',
          },
        },
      )
      setOrderData(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  return [orderData]
}

export {
  useGetUserData,
  useAddToCart,
  useRemoveFromCart,
  useAddToFavourites,
  useRemoveFromFavourites,
  useUserCartData,
  useGetOrderData,
}
