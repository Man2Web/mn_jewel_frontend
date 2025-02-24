import { ChevronRight, LogOutIcon, StoreIcon, UserIcon, XIcon } from 'lucide-react'
import { useState } from 'react'
import EarRingsMenu from './mobile/ear-rings-menu'
import { Button } from '../ui/button'
import { userLogout } from 'src/hooks/functions/userLogout'
import { useGetCategories } from 'src/hooks/products-data/getProductsData'
import { Category } from 'src/types/components/category'
import IconEffect from '../elements/icon-effect'

const Sidebar = ({ setIsMenuOpen }: HeaderProps) => {
  const [isEarMenuOpen, setIsEarMenuOpen] = useState(false)
  const [menuData, setMenuData] = useState<Category>()
  const token = localStorage.getItem('token')
  const [categoriesData] = useGetCategories()
  const isHomePageCategories = categoriesData.filter((data) => data.navbarView !== false)
  if (isHomePageCategories.length === 0) return null
  return (
    <section className="absolute top-0 z-10 h-full w-full bg-white">
      <div className="flex items-center justify-between border-b border-b-yellow-500 p-4">
        <div className="flex gap-2">
          <a href="/">
            <img
              src="https://d1uukejij9whar.cloudfront.net/logo_9721e4d6dd.png"
              alt="logo"
              className="h-10 rounded-sm"
            />
          </a>
        </div>
        <IconEffect>
          <XIcon onClick={() => setIsMenuOpen(false)} className="ml-auto " strokeWidth={1} />
        </IconEffect>
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
          <a
            href="https://www.google.com/maps/place/MN+Jewel+Park/@12.906834,79.133984,13z/data=!4m6!3m5!1s0x3bad38e73a2806d3:0x27ddd4555ccdee12!8m2!3d12.9068336!4d79.133984!16s%2Fg%2F1thd07pl?hl=en&entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="flex max-h-10 w-full items-center justify-center gap-2 rounded-sm border border-red-400 px-4 py-2"
            rel="noreferrer"
          >
            <StoreIcon color="red" size={12} strokeWidth={1} />
            <p className="text-xs">Store Locator</p>
          </a>
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
