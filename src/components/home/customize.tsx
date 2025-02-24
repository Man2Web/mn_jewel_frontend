import ImageEffect from '../elements/image-effect'
import SectionSeperator from './section-seperator'

const Customize = () => {
  return (
    <section className="p-2">
      <SectionSeperator
        title="Customize Jewellery at our store"
        description="get in touch for a complete Jewellery experience"
      />
      <div className="flex flex-col gap-4 lg:flex-row">
        <a href="/videoshopping" target="_blank" className="w-full lg:w-1/2">
          <ImageEffect
            image_source="https://d1uukejij9whar.cloudfront.net/video_Shopping_e261847124.png"
            image_alt_text="store image"
          />
        </a>
        <a href="/commingsoon" target="_blank" className="hidden w-full lg:block lg:w-1/2">
          <ImageEffect
            image_source="https://d1uukejij9whar.cloudfront.net/Saving_scheme_Banner_22fe2c1eb7.png"
            image_alt_text="ear piercing"
          />
        </a>
        {/* <div className="flex w-full gap-2 lg:hidden lg:w-1/2">
          {customizeData.map((data, index) => (
            <a key={index} className="flex w-1/3 flex-col items-center gap-2" href={data.link}>
              <img src={data.img} alt={data.name} className="h-20 w-full rounded-lg object-cover md:h-40" />
              <p className="text-xs">{data.name}</p>
            </a>
          ))}
        </div> */}
      </div>
    </section>
  )
}

export default Customize
