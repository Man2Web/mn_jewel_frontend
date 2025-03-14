import { Button } from '../ui/button'
import SectionSeperator from './section-seperator'
import ImageEffect from '../elements/image-effect'
import { useNavigate } from 'react-router-dom'
import { useGetCategories } from 'src/hooks/products-data/getProductsData'

const Categories = () => {
  const navigate = useNavigate()
  const [categoriesData] = useGetCategories()
  const isHomePageCategories = categoriesData.filter((data) => data.homePageView !== false)
  if (isHomePageCategories.length === 0) return null
  return (
    <section className="p-2">
      <SectionSeperator title="Shop By Categories" description="Explore our wide range of products" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {isHomePageCategories.map((category, index) => (
          <a
            href={`products?productType=${category?.name}`}
            className={`flex flex-col items-center hover:cursor-pointer hover:text-red-400`}
            key={index}
          >
            <ImageEffect className="" image_source={`${category.homePageImage.url}`} image_alt_text={category.name} />
            <p className="hidden pt-2 text-sm lg:block">{category.name}</p>
          </a>
        ))}
      </div>
      <Button onClick={() => navigate('/products')} variant="primary" className="mx-auto mt-8 flex justify-center">
        View All Categories
      </Button>
    </section>
  )
}

export default Categories
