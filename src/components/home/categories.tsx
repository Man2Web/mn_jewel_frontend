import { categories } from 'src/data/components/home'
import { Button } from '../ui/button'
import SectionSeperator from './section-seperator'
import ImageEffect from '../elements/image-effect'

const Categories = () => {
  return (
    <section className="px-6 py-8">
      <SectionSeperator title="Shop By Categories" description="Explore our wide range of products" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {categories.map((category, index) => (
          <a href={category.link} className={`flex flex-col items-center`} key={index}>
            <ImageEffect className="rounded-b-none" image_source={category.img} image_alt_text={category.name} />
            <p className="hidden pt-2 text-sm lg:block">{category.name}</p>
          </a>
        ))}
      </div>
      <Button variant="primary" className="mx-auto mt-8 flex justify-center">
        View All Categories
      </Button>
    </section>
  )
}

export default Categories
