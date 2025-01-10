import { customizeData } from 'src/data/components/home'
import ImageEffect from '../elements/image-effect'
import SectionSeperator from './section-seperator'

const Customize = () => {
  return (
    <section className="px-6 py-8">
      <SectionSeperator
        title="Customize Jewellery at our store"
        description="get in touch for a complete Jewellery experience"
      />
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <ImageEffect
            image_source="https://cdn.joyalukkas.in/media/wysiwyg/1200X585_CUSTOMIZED-1_1_1.jpg"
            image_alt_text="store image"
          />
        </div>
        <div className="hidden w-full lg:block lg:w-1/2">
          <ImageEffect
            image_source="https://cdn.joyalukkas.in/media/wysiwyg/1200X585_CUSTOMIZED-JEWELLERY1_1.jpg"
            image_alt_text="ear piercing"
          />
        </div>
        <div className="flex w-full gap-2 lg:hidden lg:w-1/2">
          {customizeData.map((data, index) => (
            <a key={index} className="flex w-1/3 flex-col items-center gap-2" href={data.link}>
              <img src={data.img} alt={data.name} className="h-20 w-full rounded-lg object-cover md:h-40" />
              <p className="text-xs">{data.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Customize
