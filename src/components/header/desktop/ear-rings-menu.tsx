import { priceData } from 'src/data/components/header'
import { useGetMetal, useGetSubCategory } from 'src/hooks/products-data/getProductsData'
import { Category } from 'src/types/components/category'

const EarRingsMenu = ({ menuData }: { menuData: Category | undefined }) => {
  const [subCategoryData] = useGetSubCategory()
  const subCategory = subCategoryData.filter((data) => data.name === menuData?.sub_category?.name)
  const [metalData] = useGetMetal()
  return (
    <section className="flex h-auto gap-2">
      <div className="flex w-4/12 border-r border-r-slate-300 p-2">
        <a href={`products?productType=${menuData?.name}`} className="h-full object-contain">
          <img
            src={`${import.meta.env.VITE_STRAPI}${menuData?.homePageImage.url}`}
            alt={menuData?.name}
            className="max-h-[300px] min-h-[300px] w-full rounded-md"
          />
        </a>
      </div>
      <div className="w-4/12 border-r border-r-slate-300 p-2">
        <p className="text-sm">Shop by Style</p>
        <span className="mt-2 block h-0.5 w-1/4 bg-red-400" />
        <div className="mt-2 grid grid-cols-2 gap-2">
          {subCategory.map((data, index) => (
            <a
              href={`products?productType=${menuData?.name}&subProductType=${data.name}`}
              className="flex max-h-[80px] min-h-[80px] min-w-[80px] max-w-[80px] items-center gap-2 rounded-sm  hover:text-red-400"
              key={index}
            >
              <img
                className="h-full w-full"
                src={`${import.meta.env.VITE_STRAPI}${data?.png_Image.url}`}
                alt={data.name}
              />
              <p className="text-sm">{data.name}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="w-3/12 border-r border-r-slate-300 p-2">
        <p className="text-sm">Shop by Price</p>
        <span className="mt-2 block h-0.5 w-1/4 bg-red-400" />
        <div className="mt-2 grid grid-cols-1 gap-2">
          {priceData.map((data, index) => (
            <a
              key={index}
              href={`products?productType=${menuData?.name}&minPrice=${data.minPrice}&maxPrice=${data.maxPrice}`}
              className="mx-auto w-full p-1 text-sm hover:cursor-pointer hover:text-red-400"
            >
              {data.name}
            </a>
          ))}
        </div>
      </div>
      <div className="w-3/12 p-2">
        <p className="text-sm">Shop by Metal & Stone</p>
        <span className="mt-2 block h-0.5 w-1/4 bg-red-400" />
        <div className="mt-2 grid grid-cols-1 gap-2">
          {metalData.map((data, index) => (
            <a
              href={`products?productType=${menuData?.name}&metalType=${data.material_type}`}
              className="flex items-center gap-2 p-1 hover:cursor-pointer hover:text-red-400"
              key={index}
            >
              <span className="rounded-full bg-yellow-400 p-1.5" />
              <p className="text-sm">{data.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EarRingsMenu
