import { tourData } from 'src/data/components/home'
import ImageEffect from '../elements/image-effect'
import SectionSeperator from './section-seperator'
import { ArrowRight, HomeIcon } from 'lucide-react'

const Tour = () => {
  return (
    <section className="p-2">
      <SectionSeperator
        title="Take A Tour"
        description="Craftsmanship and innovation, that brings you modern, everyday designs."
      />
      <div className="flex flex-col gap-4 lg:flex-row">
        {tourData.map((data, index) => (
          <a href={data.link} key={index} className="flex w-full flex-1 flex-col lg:w-1/3">
            <ImageEffect
              className="flex-shrink-0 rounded-b-none"
              image_source={data.img}
              image_alt_text={data.description}
            />
            <div className="flex flex-grow items-center gap-2 rounded-b-xl bg-red-50 p-2">
              <span className="text-red-400">
                <HomeIcon className="h-12 w-12 lg:h-10 lg:w-10" strokeWidth={1} />
              </span>
              <div className="flex-grow">
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
