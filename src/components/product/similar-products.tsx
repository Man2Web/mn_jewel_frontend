import Slider from 'react-slick'
import ProductCard from '../elements/product-card'
import useGetAllProducts from 'src/hooks/products/getAllProducts'

const SimilarProducts = () => {
  const [products] = useGetAllProducts()
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
          {products.map((product, index) => (
            <div className="px-2 lg:px-0" key={index}>
              <ProductCard product={product} bestSellingSection={true} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default SimilarProducts
