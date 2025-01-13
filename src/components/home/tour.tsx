import { tourData } from 'src/data/components/home'
import ImageEffect from '../elements/image-effect'
import SectionSeperator from './section-seperator'
import { ArrowRight, HomeIcon } from 'lucide-react'

const Tour = () => {
  return (
    <section className="px-6 py-8">
      <SectionSeperator
        title="Take A Tour"
        description="Craftsmanship and innovation, that brings you modern, everyday designs."
      />
      <div className="flex flex-col gap-4 lg:flex-row">
        {tourData.map((data, index) => (
          <a href={data.link} key={index} className="w-ful lg;w-1/3">
            <ImageEffect className="rounded-b-none" image_source={data.img} image_alt_text={data.description} />
            <div className="flex items-center gap-2 rounded-b-xl bg-red-50 p-2">
              <span className="text-red-400">
                <HomeIcon className="h-12 w-12 lg:h-10 lg:w-10" strokeWidth={1} />
              </span>
              <div className="">
                <h1 className="font-semibold">{data.name}</h1>
                <p className="text-sm">{data.description}</p>
              </div>
              <ArrowRight className="h-16 w-16 lg:h-10 lg:w-10" strokeWidth={1} />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Tour
