import axios from 'axios'
import { useEffect, useState } from 'react'
import { Scheme, SchemeTransaction } from 'src/types/components/schemes'
import { useGetUserData } from './user'
import { UserSchemesInterface } from 'src/types/components/user'

function useGetSchemes() {
  const [schemes, setSchemes] = useState<Scheme[] | undefined>([])
  useEffect(() => {
    useGetSchemes()
  }, [])
  const useGetSchemes = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_STRAPI_API}/schemes`, {
        params: {
          populate: '*',
        },
      })
      setSchemes(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }
  return [schemes]
}

function useGetSchemeData(id: string | undefined) {
  const [schemeData, setSchemeData] = useState<Scheme | undefined>()
  useEffect(() => {
    useGetSchemes()
  }, [])
  const useGetSchemes = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_STRAPI_API}/schemes/${id}`, {
        params: {
          populate: '*',
        },
      })
      setSchemeData(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }
  return [schemeData]
}

function useGetUserSchemeTransactions() {
  const [digitalTransactions, setDigitalTransactions] = useState<SchemeTransaction[]>([])
  const jwt = localStorage.getItem('token')
  const { userData } = useGetUserData()
  useEffect(() => {
    if (!userData || !jwt) return
    getData()
  }, [userData])
  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_STRAPI_API}/users/me`, {
        params: {
          'populate[scheme_transactions][populate][scheme][populate]': 'logo',
        },
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json',
        },
      })
      setDigitalTransactions(
        response.data.scheme_transactions.sort((a: SchemeTransaction, b: SchemeTransaction) => b.id - a.id),
      )
    } catch (error) {
      console.error(error)
    }
  }
  return [digitalTransactions]
}

function useGetUserSchemes() {
  const [userSchemes, setUserSchemes] = useState<UserSchemesInterface[]>([])
  const jwt = localStorage.getItem('token')
  const { userData } = useGetUserData()
  useEffect(() => {
    if (!userData || !jwt) return
    getData()
  }, [userData])
  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_STRAPI_API}/users/me`, {
        params: {
          'populate[user_schemes][populate][scheme][populate]': 'logo',
        },
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json',
        },
      })
      setUserSchemes(response.data.user_schemes.sort((a: UserSchemesInterface, b: UserSchemesInterface) => b.id - a.id))
    } catch (error) {
      console.error(error)
    }
  }
  return [userSchemes]
}

export { useGetSchemes, useGetSchemeData, useGetUserSchemeTransactions, useGetUserSchemes }
