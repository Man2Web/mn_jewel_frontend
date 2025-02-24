import Slider from 'react-slick'
import ProductCard from '../product/product-card'
import { Button } from '../ui/button'
import SectionSeperator from './section-seperator'
import useBestSellerHook from 'src/hooks/products/getBestSellers'

const BestSelling = () => {
  const [productsData] = useBestSellerHook()
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <section className="block overflow-hidden p-2">
      <SectionSeperator title="Best Selling" description="Love the most to bought the most" />
      <Slider {...settings}>
        {productsData.map((product, index) => (
          <a key={index} href={'/products/' + product.documentId} className="px-1">
            <ProductCard product={product} bestSellingSection />
          </a>
        ))}
      </Slider>
      <Button
        onClick={() => {
          window.location.href = '/products'
        }}
        variant="primary"
        className="mx-auto mt-8 flex justify-center"
      >
        View All Best Sellers
      </Button>
    </section>
  )
}

export default BestSelling
