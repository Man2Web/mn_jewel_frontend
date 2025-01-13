import { HeartIcon, MapPin, MenuIcon, Phone, Search, ShoppingBagIcon, UserIcon } from 'lucide-react'
import { Input } from '../ui/input'
import Navbar from './navbar'
import { useState } from 'react'
import Sidebar from './sidebar'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div>
      <header className="flex w-full items-center border md:px-4 md:py-2 lg:justify-between">
        <div onClick={() => setIsMenuOpen((prev) => !prev)} className="p-4  hover:cursor-pointer lg:hidden">
          <MenuIcon strokeWidth={1} />
        </div>
        <div className="flex space-x-8">
          <a href="/">
            <img
              src="https://www.mnjewelpark.com/mnjewel/uploads/2020/12/cropped-MN-JEWEL-copy-2.png"
              alt="logo"
              className="h-12"
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
              <p>Store</p>
            </a>
            <a href="tel:+918790899807" className="flex items-center gap-1">
              <Phone strokeWidth={1} />
              <p>+91 8790899807</p>
            </a>
          </div>
        </div>
        <div className="hidden items-center lg:flex">
          <div className="relative flex w-[400px] items-center">
            <Input type="email" placeholder="Search for Diamon Bracelets" className="w-full" />
            <Search className="absolute right-2 opacity-20" />
          </div>
        </div>
        <div className="ml-auto flex items-center space-x-4 px-4 lg:ml-0">
          <div>
            <UserIcon strokeWidth={1} />
          </div>
          <div>
            <HeartIcon strokeWidth={1} />
          </div>
          <div>
            <ShoppingBagIcon strokeWidth={1} />
          </div>
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
