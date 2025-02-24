import Slider from 'react-slick'
import ProductCard from './product-card'
import useGetAllProducts from 'src/hooks/products/getAllProducts'
import SkeletonLoader from '../products/skeleton'

const SimilarProducts = () => {
  const { productsData, loading } = useGetAllProducts()
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
          {!loading &&
            productsData.length > 0 &&
            productsData.map((product, index) => (
              <div key={index} className="px-2">
                <a href={`${product.documentId}`}>
                  <ProductCard product={product} bestSellingSection={true} />
                </a>
              </div>
            ))}
        </Slider>
        {loading && <SkeletonLoader />}
      </div>
    </section>
  )
}

export default SimilarProducts
