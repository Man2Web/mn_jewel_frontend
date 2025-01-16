import Slider from 'react-slick'
import ProductCard from '../elements/product-card'

const SimilarProducts = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
      <h1 className="pb-2 text-2xl">Similar Products</h1>
      <div className="overflow-hidden">
        <Slider {...settings}>
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index}>
              <ProductCard />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default SimilarProducts
