import { DiamondIcon, HeartIcon, MapPin, MenuIcon, Phone, Search, ShoppingBagIcon, UserIcon } from 'lucide-react'
import { Input } from '../ui/input'
import Navbar from './navbar'
import { useContext, useState } from 'react'
import Sidebar from './sidebar'
import { useGetMaterialPrice } from 'src/hooks/data/getMaterialPrice'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { MyContext } from '../layout/context'
import { useGetUserCartData } from 'src/hooks/user/user'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [product_Name, setProduct_Name] = useState('')
  const [materialPrice] = useGetMaterialPrice()
  const context = useContext(MyContext)
  if (!context) {
    throw new Error('MyContext must be used within a MyContextProvider')
  }
  useGetUserCartData()
  const { userCartData } = context
  const isLoggedIn = localStorage.getItem('token')
  return (
    <div>
      <div className="overflow-hidden border-b border-red-400 bg-red-50 py-1 text-sm lg:hidden">
        <div className="flex animate-marquee gap-2 whitespace-nowrap ">
          {materialPrice.map((data, index) => (
            <span key={index} className="mx-4 flex items-center gap-2">
              <DiamondIcon fill="yellow" size={10} />
              <p className="text-red-400">
                {data.name}: {data.price.toLocaleString()}
              </p>
              <DiamondIcon fill="yellow" size={10} />
            </span>
          ))}
        </div>
      </div>
      <header className="flex w-full items-center border-b md:px-4 md:py-2 lg:justify-between">
        <div onClick={() => setIsMenuOpen((prev) => !prev)} className="p-4  hover:cursor-pointer lg:hidden">
          <MenuIcon strokeWidth={1} />
        </div>
        <div className="flex space-x-8">
          <a href="/">
            <img
              src="https://www.mnjewelpark.com/mnjewel/uploads/2020/12/cropped-MN-JEWEL-copy-2.png"
              alt="logo"
              className="h-12 rounded-sm"
            />
          </a>
          <div className="hidden gap-6 lg:flex">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/MN+Jewel+Park/@12.906834,79.133984,13z/data=!4m6!3m5!1s0x3bad38e73a2806d3:0x27ddd4555ccdee12!8m2!3d12.9068336!4d79.133984!16s%2Fg%2F1thd07pl?hl=en&entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D"
              className="flex items-center gap-1"
              rel="noreferrer"
            >
              <MapPin strokeWidth={1} />
              <p>Arni Road, Vellore</p>
            </a>
            <a href="tel:+918790899807" className="flex items-center gap-1">
              <Phone strokeWidth={1} />
              <p>+91 8790899807</p>
            </a>
          </div>
        </div>
        <div className="hidden items-center lg:flex">
          <div className="relative flex w-[400px] items-center">
            <Input
              onChange={(e) => setProduct_Name(e.target.value)}
              type="email"
              placeholder="Search for Diamon Bracelets"
              className="w-full"
            />
            <Search
              onClick={() => {
                window.location.href = `products?productName=${product_Name}`
              }}
              className="absolute right-2 opacity-20 hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="ml-auto flex items-center space-x-4 px-4 lg:ml-0">
          <div className="hidden cursor-pointer items-center gap-4 rounded-full border border-red-200 bg-red-50 px-4 py-2 hover:border-red-400 hover:bg-red-100 lg:flex">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="flex items-center gap-4 text-sm font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    color={'#000000'}
                    fill={'yellow'}
                  >
                    <path
                      d="M14.2644 18.3717C14.5806 17.407 14.7387 16.9247 15.0616 16.593C15.215 16.4354 15.3932 16.3048 15.5887 16.2066C16.0003 16 16.5003 16 17.5002 16C18.5001 16 19.0001 16 19.4116 16.2066C19.6072 16.3048 19.7853 16.4354 19.9388 16.593C20.2617 16.9247 20.4198 17.407 20.736 18.3717L21.0624 19.3675C21.4561 20.5688 21.653 21.1694 21.3587 21.5847C21.0643 22 20.4418 22 19.1966 22H15.8038C14.5586 22 13.936 22 13.6417 21.5847C13.3473 21.1694 13.5442 20.5688 13.938 19.3675L14.2644 18.3717Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8.76421 10.3717C9.08041 9.40705 9.23851 8.92471 9.56143 8.59298C9.71485 8.43537 9.89299 8.3048 10.0885 8.20663C10.5001 8 11.0001 8 12 8C12.9999 8 13.4999 8 13.9115 8.20663C14.107 8.3048 14.2851 8.43537 14.4386 8.59298C14.7615 8.92471 14.9196 9.40705 15.2358 10.3717L15.5622 11.3675C15.956 12.5688 16.1528 13.1694 15.8585 13.5847C15.5642 14 14.9416 14 13.6964 14H10.3036C9.05842 14 8.43585 14 8.1415 13.5847C7.84716 13.1694 8.04404 12.5688 8.43779 11.3675L8.76421 10.3717Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M3.26439 18.3717C3.58059 17.407 3.73869 16.9247 4.06162 16.593C4.21504 16.4354 4.39317 16.3048 4.58872 16.2066C5.00031 16 5.50027 16 6.50018 16C7.5001 16 8.00006 16 8.41165 16.2066C8.6072 16.3048 8.78533 16.4354 8.93875 16.593C9.26167 16.9247 9.41977 17.407 9.73597 18.3717L10.0624 19.3675C10.4561 20.5688 10.653 21.1694 10.3587 21.5847C10.0643 22 9.44176 22 8.19661 22H4.80375C3.5586 22 2.93603 22 2.64169 21.5847C2.34735 21.1694 2.54422 20.5688 2.93797 19.3675L3.26439 18.3717Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12 2V4M7.5 3.5L9 5M16.5 3.5L15 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p>Live Price</p>
                  <TooltipContent>
                    <div className="bg-white bg-opacity-75 p-2">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Material</TableHead>
                            <TableHead>Today&apos;s Price</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {materialPrice.map((data, index) => (
                            <TableRow key={index}>
                              <TableCell className="text-left">{data.name}</TableCell>
                              <TableCell>{data.price}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </TooltipContent>
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
          </div>
          <a href={isLoggedIn ? '/profile' : '/auth'}>
            <UserIcon strokeWidth={1} />
          </a>
          <div>
            <HeartIcon strokeWidth={1} />
          </div>
          <a href="/cart" className="relative hover:cursor-pointer">
            <ShoppingBagIcon strokeWidth={1} />
            {userCartData && userCartData.length > 0 && (
              <span className="absolute right-[-4px] top-[-8px] flex h-4 w-4 justify-center rounded-full bg-red-400 text-xs text-white">
                {userCartData.length}
              </span>
            )}
          </a>
        </div>
      </header>
      <div className="flex items-center p-2 lg:hidden">
        <div className="relative mx-auto flex w-[400px] items-center">
          <Input type="email" placeholder="Search for Diamon Bracelets" className="w-full" />
          <Search className="absolute right-2 opacity-20" />
        </div>
      </div>
      <Navbar />
      <div
        className={`fixed inset-0 z-50 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        <Sidebar setIsMenuOpen={setIsMenuOpen} />
      </div>
    </div>
  )
}
