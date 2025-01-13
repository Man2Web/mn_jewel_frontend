import { ArrowDownWideNarrowIcon, FilterIcon } from 'lucide-react'
import ProductCard from 'src/components/elements/product-card'
import FiltersMenu from 'src/components/products/filters-menu'
import SortModal from 'src/components/products/sort-modal'
import { Dialog, DialogTrigger } from 'src/components/ui/dialog'
import { Drawer, DrawerTrigger } from 'src/components/ui/drawer'

const Products = () => {
  return (
    <section>
      <Dialog>
        <div className="flex bg-red-50">
          <DialogTrigger className="flex w-1/2 items-center justify-center gap-2 px-2 py-4 text-red-400">
            <ArrowDownWideNarrowIcon strokeWidth={1.5} />
            <div>
              <p className="text-sm font-semibold uppercase">Revelance</p>
            </div>
          </DialogTrigger>
          <SortModal />
          <span className="w-0.5 bg-red-200" />
          <Drawer>
            <DrawerTrigger className="flex w-1/2 items-center justify-center gap-2 px-2 py-4 text-red-400">
              <FilterIcon strokeWidth={1.5} />
              <div>
                <p className="text-sm font-semibold uppercase">Filters</p>
              </div>
            </DrawerTrigger>
            <FiltersMenu />
          </Drawer>
        </div>
        <div className="px-6 py-8">
          <p className="font-semibold capitalize opacity-50">(showing {Number(10000).toLocaleString()} designs)</p>
          <div className="grid grid-cols-1 items-center justify-center overflow-hidden lg:grid-cols-5">
            {Array.from({ length: 50 }).map((_, index) => (
              <a href="#" key={index} className="flex justify-center p-2">
                <ProductCard />
              </a>
            ))}
          </div>
        </div>
      </Dialog>
    </section>
  )
}

export default Products
