import Slider from 'react-slick'
import { Card, CardContent, CardHeader } from '../ui/card'
import { HeartIcon, IndianRupee } from 'lucide-react'

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
            <div className="relative">
              <img
                className="bg-red-50 p-6"
                src="https://pics.clipartpng.com/midle/Diamond_Earrings_PNG_Clipart-284.png"
                alt="product image"
              />
              <div className="absolute right-2 top-2">
                <HeartIcon size={16} strokeWidth={0.6} />
              </div>
            </div>
            <div className="relative">
              <img
                className="bg-red-50 p-6"
                src="https://pics.clipartpng.com/midle/Diamond_Earrings_PNG_Clipart-284.png"
                alt="product image"
              />
              <div className="absolute right-2 top-2">
                <HeartIcon size={16} strokeWidth={0.6} />
              </div>
            </div>
            <div className="relative">
              <img
                className="bg-red-50 p-6"
                src="https://pics.clipartpng.com/midle/Diamond_Earrings_PNG_Clipart-284.png"
                alt="product image"
              />
              <div className="absolute right-2 top-2">
                <HeartIcon size={16} strokeWidth={0.6} />
              </div>
            </div>
          </Slider>
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
