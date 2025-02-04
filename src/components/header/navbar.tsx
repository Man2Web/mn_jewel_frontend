import { useState } from 'react'
import EarRingsMenu from './desktop/ear-rings-menu'
import { useGetCategories } from 'src/hooks/products-data/getProductsData'
import { Category } from 'src/types/components/category'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null)
  const [menuData, setMenuData] = useState<Category>()
  const [categoriesData] = useGetCategories()
  const isHomePageCategories = categoriesData.filter((data) => data.navbarView !== false)
  if (isHomePageCategories.length === 0) return null
  return (
    <nav
      className="hidden w-full border border-solid border-b-slate-200 border-t-yellow-600 py-2 lg:relative lg:flex lg:px-32 xl:px-60"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <ul className="mx-auto flex gap-4 lg:px-32 xl:px-60">
        {isHomePageCategories.map((data, index) => (
          <li
            key={index}
            onMouseEnter={() => {
              setActiveMenu(index)
              setMenuData(data)
            }}
            className="mx-auto cursor-pointer px-2 text-sm opacity-70 transition-colors duration-300 hover:font-semibold hover:text-yellow-500"
          >
            {data.name}
          </li>
        ))}
      </ul>
      <div
        className={`absolute top-full z-10 w-screen transition duration-300 ${
          activeMenu !== null ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ left: 'calc(50% - 50vw)' }}
      >
        {activeMenu !== null && activeMenu >= 0 && (
          <div className="overflow-hidden bg-white p-4">
            <EarRingsMenu menuData={menuData} />
          </div>
        )}
        {/* {activeMenu === 1 && (
          <div className="overflow-hidden bg-white p-4">
            <BraceletMenu />
          </div>
        )} */}
      </div>
    </nav>
  )
}

export default Navbar
