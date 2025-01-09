import { categoriesData } from 'src/data/components/header'

const CategorySlider = () => {
  return (
    <section className="flex gap-4 overflow-scroll p-2 lg:hidden">
      {categoriesData.map((category, index) => (
        <div className="flex flex-col items-center" key={index}>
          <img
            className="min-h-[75px] min-w-[75px] rounded-full border border-yellow-600 p-1"
            src={category.image}
            alt={category.name}
          />
          <p className="block text-xs">{category.name}</p>
        </div>
      ))}
    </section>
  )
}

export default CategorySlider
