import Slider from 'react-slick'
import { Card, CardContent, CardHeader } from '../ui/card'
import { IndianRupee } from 'lucide-react'

const ProductCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
  }
  return (
    <div>
      <Card className="max-w-[300px] border-none shadow-none">
        <CardHeader className="p-0">
          <Slider {...settings}>
            <div>
              <img
                src="https://www.tarinika.in/cdn/shop/files/UntitledSession4528_2048x.jpg?v=1692287666"
                alt="product image"
              />
            </div>
            <div>
              <img
                src="https://www.tarinika.in/cdn/shop/files/UntitledSession4528_2048x.jpg?v=1692287666"
                alt="product image"
              />
            </div>
            <div>
              <img
                src="https://www.tarinika.in/cdn/shop/files/UntitledSession4528_2048x.jpg?v=1692287666"
                alt="product image"
              />
            </div>
          </Slider>
        </CardHeader>
        <CardContent className="p-0">
          <p className="flex items-center opacity-70">
            <IndianRupee size={14} color="#000000" strokeWidth={1} /> {Number(12000).toLocaleString()}
          </p>
          <p className="text-sm opacity-70">Lavish Gold Earrings</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductCard
