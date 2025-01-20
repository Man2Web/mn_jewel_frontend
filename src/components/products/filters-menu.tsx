import { useState } from 'react'
import { Button } from '../ui/button'
import { DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from '../ui/drawer'
import PriceRange from './filtering-options/price-range'

import { UseFormRegister, FormProvider, useForm } from 'react-hook-form'
import ProductType from './filtering-options/product-type'
import MaterialType from './filtering-options/material-type'
import MetalType from './filtering-options/metal-type'
import MetalColor from './filtering-options/metal-color'
import Gender from './filtering-options/gender'
import OcassionType from './filtering-options/ocassion-type'

interface FiltersMenuProps {
  register: UseFormRegister<ProductsFormInterface>
  methods: ReturnType<typeof useForm<ProductsFormInterface>>
}

const FiltersMenu = ({ register, methods }: FiltersMenuProps) => {
  const [openMenu, setOpenMenu] = useState<number>(0)
  return (
    <FormProvider {...methods}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filtering Options</DrawerTitle>
          {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
        </DrawerHeader>
        <div className="flex">
          <div className="flex w-2/3 flex-col border-r border-slate-200 lg:w-1/3">
            <div
              onClick={() => {
                setOpenMenu(0)
              }}
              className={`border-b  px-4 py-2 text-sm font-semibold hover:text-red-400 ${
                openMenu === 0 ? 'text-red-400' : ''
              }`}
            >
              Product Type
            </div>
            <div
              onClick={() => {
                setOpenMenu(1)
              }}
              className={`border-b  px-4 py-2 text-sm font-semibold hover:text-red-400 ${
                openMenu === 1 ? 'text-red-400' : ''
              }`}
            >
              Material
            </div>
            <div
              onClick={() => {
                setOpenMenu(2)
              }}
              className={`border-b  px-4 py-2 text-sm font-semibold hover:text-red-400 ${
                openMenu === 2 ? 'text-red-400' : ''
              }`}
            >
              Metal
            </div>
            <div
              onClick={() => {
                setOpenMenu(3)
              }}
              className={`border-b  px-4 py-2 text-sm font-semibold hover:text-red-400 ${
                openMenu === 3 ? 'text-red-400' : ''
              }`}
            >
              Metal Color
            </div>
            <div
              onClick={() => setOpenMenu(4)}
              className={`border-b  px-4 py-2 text-sm font-semibold hover:text-red-400 ${
                openMenu === 4 ? 'text-red-400' : ''
              }`}
            >
              Price
            </div>
            <div
              onClick={() => setOpenMenu(5)}
              className={`border-b  px-4 py-2 text-sm font-semibold hover:text-red-400 ${
                openMenu === 5 ? 'text-red-400' : ''
              }`}
            >
              Gender
            </div>
            <div
              onClick={() => setOpenMenu(6)}
              className={`border-b  px-4 py-2 text-sm font-semibold hover:text-red-400 ${
                openMenu === 6 ? 'text-red-400' : ''
              }`}
            >
              Ocassion
            </div>
          </div>
          <div className="w-2/3 p-2">
            {openMenu === 0 && <ProductType register={register} />}
            {openMenu === 1 && <MaterialType register={register} />}
            {openMenu === 2 && <MetalType register={register} />}
            {openMenu === 3 && <MetalColor register={register} />}
            {openMenu === 4 && <PriceRange register={register} />}
            {openMenu === 5 && <Gender register={register} />}
            {openMenu === 6 && <OcassionType register={register} />}
          </div>
        </div>
        <DrawerFooter className="flex flex-col justify-center lg:flex-row lg:gap-2">
          <Button variant="primary">Apply Filters</Button>
          <Button disabled variant="primary">
            Clear Filters
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </FormProvider>
  )
}

export default FiltersMenu
