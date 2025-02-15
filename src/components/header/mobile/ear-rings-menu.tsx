import { ChevronLeft, ChevronRight } from 'lucide-react'
import { priceData } from 'src/data/components/header'
import { useGetMetal, useGetSubCategory } from 'src/hooks/products-data/getProductsData'
import { Category } from 'src/types/components/category'

const EarRingsMenu = ({
  setIsEarMenuOpen,
  menuData,
}: {
  setIsEarMenuOpen: (data: boolean) => void
  menuData: Category | undefined
}) => {
  const [subCategoryData] = useGetSubCategory()
  const subCategory = subCategoryData.filter((data) => data.name === menuData?.sub_category?.name)
  const [metalData] = useGetMetal()
  return (
    <section className="absolute top-0 z-20 h-full w-full overflow-y-scroll bg-white">
      <div onClick={() => setIsEarMenuOpen(false)} className="flex items-center border border-b-yellow-500 px-2 py-4">
        <ChevronLeft strokeWidth={2} />
        <p className="text-sm font-medium">{menuData?.name}</p>
      </div>
      <div className="p-4">
        <img
          src={`${menuData?.homePageImage.url}`}
          alt={menuData?.name}
          className="max-h-[150px] min-h-[150px] w-full rounded-md"
        />
        <a
          href={`products?productType=${menuData?.name}`}
          className="flex items-center justify-between border border-x-0 border-b-yellow-500 py-2"
        >
          <p className="text-sm">Shop all {menuData?.name}</p>
          <ChevronRight size={18} strokeWidth={2.5} color="#ecc94b" />
        </a>
      </div>
      <div className="px-4">
        <p className="text-sm">Shop By Style</p>
        <div className="mt-2 grid grid-cols-3 gap-2 border border-x-0 border-b-yellow-500 pb-2">
          {subCategory.map((data, index) => (
            <a
              href={`products?productType=${menuData?.name}&subProductType=${data.name}`}
              className="flex min-h-[50px] min-w-[50px] flex-col items-center gap-2 rounded-sm border border-red-400 px-4 py-2"
              key={index}
            >
              <img className="h-full w-full" src={`${data?.png_Image.url}`} alt={data.name} />
              <p className="text-sm">{data.name}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm">Shop By Price</p>
        <div className="mt-2 grid grid-cols-3 gap-2 border border-x-0 border-b-yellow-500 pb-2">
          {priceData.map((data, index) => (
            <a
              key={index}
              href={`products?productType=${menuData?.name}&minPrice=${data.minPrice}&maxPrice=${data.maxPrice}`}
              className="mx-auto w-full rounded-sm border border-red-400 bg-red-50 p-1 text-sm"
            >
              {data.name}
            </a>
          ))}
        </div>
      </div>
      <div className="px-4">
        <p className="text-sm">Shop By Metal & Stone</p>
        <div className="mt-2 grid grid-cols-3 gap-2 border border-x-0 border-b-yellow-500 pb-2">
          {metalData.map((data, index) => (
            <a
              key={index}
              href={`products?productType=${menuData?.name}&metalType=${data.material_type}`}
              className="mx-auto flex w-full items-center gap-1 rounded-sm border border-red-400 bg-red-50 p-1 text-sm"
            >
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              {data.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EarRingsMenu
