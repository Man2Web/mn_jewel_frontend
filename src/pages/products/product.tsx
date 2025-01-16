import Slider from 'react-slick'
import MobileEnquiry from 'src/components/product/mobile-enquiry'
import { productImages } from 'src/data/components/product'

const Product = () => {
  const settings = {
    arrows: true,
  }
  return (
    <section>
      <div className="overflow-hidden">
        <Slider {...settings}>
          {productImages.map((data, index) => (
            <div key={index}>
              <img className="h-96" src={data.image} alt={data.name} />
            </div>
          ))}
        </Slider>
        <div>
          <h1 className="font-serif text-xl font-extralight tracking-wide">Earrings Gold</h1>
        </div>
      </div>
      <MobileEnquiry />
    </section>
  )
}

export default Product
