import { HeartIcon, MapPin, MenuIcon, Phone, Search, ShoppingBagIcon, UserIcon } from 'lucide-react'
import { Input } from '../ui/input'
import Navbar from './navbar'

export function Header() {
  return (
    <div>
      <header className="flex w-full items-center justify-between border bg-slate-50 bg-opacity-70 py-2 md:px-4">
        <div className="flex space-x-8">
          <a href="/">
            <img
              src="https://www.mnjewelpark.com/mnjewel/uploads/2020/12/cropped-MN-JEWEL-copy-2.png"
              alt="logo"
              className="h-12"
            />
          </a>
          <div className="flex gap-6">
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
        <div className="flex items-center">
          <div className="relative flex w-[400px] items-center">
            <Input type="email" placeholder="Search for Diamon Bracelets" className="w-full" />
            <Search className="absolute right-2 opacity-20" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <UserIcon strokeWidth={1} />
          </div>
          <div>
            <HeartIcon strokeWidth={1} />
          </div>
          <div>
            <ShoppingBagIcon strokeWidth={1} />
          </div>
          <div>
            <MenuIcon strokeWidth={1} />
          </div>
        </div>
      </header>
      <Navbar />
    </div>
  )
}
