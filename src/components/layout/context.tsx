import { createContext, ReactNode, useState } from 'react'
import { Product } from 'src/types/components/product'
import { User } from 'src/types/components/user'

interface MyContextProps {
  userCartData: Product[]
  setUserCartData: (data: Product[]) => void
  userFavouritesData: Product[]
  setUserFavouritesData: (data: Product[]) => void
  userData: User | undefined
  setUserData: (data: User) => void
}

export const MyContext = createContext<MyContextProps | undefined>(undefined)

const MyContextProvider = ({ children }: { children: ReactNode }) => {
  const [userCartData, setUserCartData] = useState<Product[]>([])
  const [userFavouritesData, setUserFavouritesData] = useState<Product[]>([])
  const [userData, setUserData] = useState<User>()
  return (
    <MyContext.Provider
      value={{ userCartData, setUserCartData, userFavouritesData, setUserFavouritesData, userData, setUserData }}
    >
      {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider
