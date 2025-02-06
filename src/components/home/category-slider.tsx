import { useGetMetal } from 'src/hooks/products-data/getProductsData'

const CategorySlider = () => {
  const [metalData] = useGetMetal()
  if (metalData.length == 0) return null
  return (
    <section className="flex gap-4 overflow-scroll p-2 lg:hidden">
      {metalData.map((data, index) => (
        <div className="flex flex-col items-center" key={index}>
          <img
            className="max-h-[75px] min-h-[75px] min-w-[75px] max-w-[75px] rounded-full border border-yellow-600 p-1"
            src={`${import.meta.env.VITE_STRAPI}${data?.homepageBanner.url}`}
            alt={data.name}
          />
          <p className="block text-xs">{data.name}</p>
        </div>
      ))}
    </section>
  )
}

export default CategorySlider
