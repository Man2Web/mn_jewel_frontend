import Slider from 'react-slick'
import ProductCard from '../elements/product-card'
import { Button } from '../ui/button'
import SectionSeperator from './section-seperator'

const BestSelling = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  }
  return (
    <section className="block overflow-hidden px-6 py-8 lg:hidden">
      <SectionSeperator title="Best Selling" description="Love the most to bought the most" />
      <Slider {...settings}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="px-1" key={index}>
            <ProductCard />
          </div>
        ))}
      </Slider>
      <Button variant="primary" className="mx-auto mt-8 flex justify-center">
        View All Best Sellers
      </Button>
    </section>
  )
}

export default BestSelling
