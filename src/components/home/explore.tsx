import { exploreData } from 'src/data/components/home'
import ImageEffect from '../elements/image-effect'
import { Button } from '../ui/button'
import SectionSeperator from './section-seperator'

const Explore = () => {
  return (
    <section className="hidden px-6 py-8 lg:block">
      <SectionSeperator
        title="Explore Jewellery"
        description="Discover Jewellery pieces for every style, Start Shopping"
      />
      <div className="flex items-center gap-4">
        {exploreData.map((data, index) => (
          <a key={index} href={data.link} className="flex w-1/3 flex-col items-center hover:text-red-400">
            <ImageEffect image_source={data.img} image_alt_text={data.name} />
            <p className="py-2 text-sm">{data.name}</p>
          </a>
        ))}
      </div>
      <div className="flex justify-center py-2">
        <Button variant="primary">Explore More</Button>
      </div>
    </section>
  )
}

export default Explore
