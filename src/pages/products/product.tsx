import Slider from 'react-slick'
import MobileEnquiry from 'src/components/product/mobile-enquiry'
import ProductInformation from 'src/components/product/product-information'
import SimilarProducts from 'src/components/product/similar-products'
import { productImages } from 'src/data/components/product'

const Product = () => {
  const settings = {
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section>
      <div className="flex flex-col px-4 py-6 lg:flex-row">
        <div className="overflow-hidden lg:w-1/2 lg:px-2">
          <Slider {...settings}>
            {productImages.map((data, index) => (
              <div key={index}>
                <img className="h-96 w-full lg:h-[750px] lg:w-[900px]" src={data.image} alt={data.name} />
              </div>
            ))}
          </Slider>
          {/* <div className="hidden w-full lg:block">
            <ProductFeatures />
          </div> */}
        </div>
        <div className="lg:w-1/2 lg:px-2">
          <ProductInformation />
        </div>
      </div>
      <div className="px-4 pb-6">
        <SimilarProducts />
      </div>
      <MobileEnquiry />
    </section>
  )
}

export default Product
