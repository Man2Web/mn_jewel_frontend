import { ChevronRight, IndianRupeeIcon, LogOutIcon, StoreIcon, UserIcon, XIcon } from 'lucide-react'
import { useState } from 'react'
import EarRingsMenu from './mobile/ear-rings-menu'
import { Button } from '../ui/button'
import { userLogout } from 'src/hooks/functions/userLogout'
import { useGetCategories } from 'src/hooks/products-data/getProductsData'
import { Category } from 'src/types/components/category'

const Sidebar = ({ setIsMenuOpen }: HeaderProps) => {
  const [isEarMenuOpen, setIsEarMenuOpen] = useState(false)
  const [menuData, setMenuData] = useState<Category>()
  const token = localStorage.getItem('token')
  const [categoriesData] = useGetCategories()
  const isHomePageCategories = categoriesData.filter((data) => data.navbarView !== false)
  if (isHomePageCategories.length === 0) return null
  return (
    <section className="absolute top-0 z-10 h-full w-full bg-white">
      <div className="flex items-center justify-between border border-b-yellow-500 p-4">
        <div className="flex gap-2">
          <a href="/">
            <img
              src="https://www.mnjewelpark.com/mnjewel/uploads/2020/12/cropped-MN-JEWEL-copy-2.png"
              alt="logo"
              className="h-10 rounded-sm"
            />
          </a>
        </div>
        <XIcon onClick={() => setIsMenuOpen(false)} className="ml-auto " strokeWidth={1} />
      </div>
      <div className="flex flex-col gap-2 p-4">
        {isHomePageCategories.map((data, index) => (
          <div
            key={index}
            onClick={() => {
              setIsEarMenuOpen(true)
              setMenuData(data)
            }}
            className="flex items-center justify-between rounded-sm bg-red-50 pr-2"
          >
            <div className="flex items-center gap-2">
              <img className="min-h-12 min-w-12 max-w-12 max-h-12" src={`${data?.navBarPngImage.url}`} />
              <p className="text-sm">{data.name}</p>
            </div>
            <div>
              <ChevronRight strokeWidth={2} color="#ecc94b" />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 flex w-full flex-col gap-2 px-4 py-2">
        <div className="flex gap-2">
          <div className="flex max-h-10 w-1/2 items-center gap-2 rounded-sm border border-red-400 px-4 py-2">
            <IndianRupeeIcon color="red" size={12} strokeWidth={1} />
            <p className="text-xs">Gold Rate</p>
          </div>
          <div className="flex max-h-10 w-1/2 items-center gap-2 rounded-sm border border-red-400 px-4 py-2">
            <StoreIcon color="red" size={12} strokeWidth={1} />
            <p className="text-xs">Store Locator</p>
          </div>
        </div>
        {token ? (
          <Button
            onClick={() => userLogout()}
            variant="primary"
            className="flex max-h-10 w-full items-center gap-2 px-4 py-2"
          >
            <LogOutIcon color="red" size={12} strokeWidth={1} />
            <p className="text-xs">Logout</p>
          </Button>
        ) : (
          <Button
            onClick={() => {
              window.location.href = '/auth'
            }}
            variant="primary"
            className="flex max-h-10 w-full items-center gap-2 px-4 py-2"
          >
            <UserIcon color="red" size={12} strokeWidth={1} />
            <p className="text-xs">Login</p>
          </Button>
        )}
      </div>
      <div
        className={`fixed inset-0 z-50 transform ${
          isEarMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        {isEarMenuOpen && <EarRingsMenu setIsEarMenuOpen={setIsEarMenuOpen} menuData={menuData} />}
      </div>
    </section>
  )
}

export default Sidebar
