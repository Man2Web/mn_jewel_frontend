import Slider from 'react-slick'
import { Card, CardContent, CardHeader } from '../ui/card'
import { HeartIcon, IndianRupee } from 'lucide-react'
import { useState } from 'react'

const ProductCard = () => {
  const [autoplay, setAutoplay] = useState(false)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 1500,
  }
  return (
    <div className="overflow-hidden">
      <Card
        onMouseOver={() => setAutoplay(true)}
        onMouseLeave={() => setAutoplay(false)}
        className="max-w-[400px] border-none shadow-none lg:max-w-[300px]"
      >
        <CardHeader className="p-0">
          <div className="relative overflow-hidden">
            <Slider {...settings}>
              <img
                className="bg-red-50 p-6"
                src="https://pics.clipartpng.com/midle/Diamond_Earrings_PNG_Clipart-284.png"
                alt="product image"
              />
              <img
                className="bg-red-50 p-6"
                src="https://pics.clipartpng.com/midle/Diamond_Earrings_PNG_Clipart-284.png"
                alt="product image"
              />
              <img
                className="bg-red-50 p-6"
                src="https://pics.clipartpng.com/midle/Diamond_Earrings_PNG_Clipart-284.png"
                alt="product image"
              />
            </Slider>
            <div className="absolute right-2 top-2">
              <HeartIcon size={20} strokeWidth={0.6} />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex items-center py-2">
            <IndianRupee size={14} />
            <p>{Number(12000).toLocaleString()}</p>
          </div>
          <p className="text-sm opacity-70">Lavish Gold Earrings</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductCard
