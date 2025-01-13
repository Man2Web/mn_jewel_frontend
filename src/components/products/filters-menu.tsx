import { useState } from 'react'
import { Button } from '../ui/button'
import { DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from '../ui/drawer'
import PriceRange from './filtering-options/price-range'

const FiltersMenu = () => {
  const [isPriceMenuOpen, setIsPriceMenuOpen] = useState(true)
  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Filtering Options</DrawerTitle>
        {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
      </DrawerHeader>
      <div className="flex">
        <div className="flex w-1/3 flex-col border-r border-red-400">
          <a
            onClick={() => setIsPriceMenuOpen(true)}
            className="border-b border-red-400 px-4 py-2 text-sm font-semibold hover:text-red-400 active:text-red-400"
            href="#"
          >
            Product Type
          </a>
          <a
            className="border-b border-red-400 px-4 py-2 text-sm font-semibold hover:text-red-400 active:text-red-400"
            href="#"
          >
            Material
          </a>
          <a
            className="border-b border-red-400 px-4 py-2 text-sm font-semibold hover:text-red-400 active:text-red-400"
            href="#"
          >
            Metal
          </a>
          <a
            className="border-b border-red-400 px-4 py-2 text-sm font-semibold hover:text-red-400 active:text-red-400"
            href="#"
          >
            Metal Color
          </a>
          <a
            className="border-b border-red-400 px-4 py-2 text-sm font-semibold hover:text-red-400 active:text-red-400"
            href="#"
          >
            Price
          </a>
          <a
            className="border-b border-red-400 px-4 py-2 text-sm font-semibold hover:text-red-400 active:text-red-400"
            href="#"
          >
            Gender
          </a>
          <a href="#" className="px-4 py-2 text-sm font-semibold hover:text-red-400 active:text-red-400">
            Shop For
          </a>
        </div>
        <div className="w-2/3 p-2">{isPriceMenuOpen && <PriceRange />}</div>
      </div>
      <DrawerFooter>
        <Button variant="primary">Apply Filters</Button>
        <Button disabled variant="primary">
          Clear Filters
        </Button>
        {/* <DrawerClose>
          <Button variant="outline">Cancel</Button>
        </DrawerClose> */}
      </DrawerFooter>
    </DrawerContent>
  )
}

export default FiltersMenu
