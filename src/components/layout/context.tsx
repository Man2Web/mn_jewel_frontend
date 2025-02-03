import { createContext, ReactNode, useState } from 'react'
import { Product } from 'src/types/components/product'

interface MyContextProps {
  userCartData: Product[]
  setUserCartData: (data: Product[]) => void
}

export const MyContext = createContext<MyContextProps | undefined>(undefined)

const MyContextProvider = ({ children }: { children: ReactNode }) => {
  const [userCartData, setUserCartData] = useState<Product[]>([])

  return <MyContext.Provider value={{ userCartData, setUserCartData }}>{children}</MyContext.Provider>
}

export default MyContextProvider
