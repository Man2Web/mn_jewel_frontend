import ImageEffect from '../elements/image-effect'
import { Button } from '../ui/button'
import SectionSeperator from './section-seperator'
import { useGetMetal } from 'src/hooks/products-data/getProductsData'

const Explore = () => {
  const [metalData] = useGetMetal()
  const bannerImages = metalData.filter((data) => data.isHomePageBanner === true)
  return (
    <section className="hidden px-6 py-8 lg:block">
      <SectionSeperator
        title="Explore Jewellery"
        description="Discover Jewellery pieces for every style, Start Shopping"
      />
      <div className="flex items-center gap-4">
        {bannerImages.map((data, index) => (
          <a
            key={index}
            href={`products?metalType=${data.material_type}`}
            className="flex max-h-[700px] min-h-[700px] w-1/3 flex-col items-center object-contain hover:text-red-400"
          >
            <ImageEffect image_source={`${data?.homepageBanner.url}`} image_alt_text={data.name} />
            <p className="py-2 text-sm">{data.name}</p>
          </a>
        ))}
      </div>
      <div className="flex justify-center py-2">
        <Button onClick={() => (window.location.href = '/products')} variant="primary">
          Explore More
        </Button>
      </div>
    </section>
  )
}

export default Explore
