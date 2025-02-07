import Slider from 'react-slick'
import { Card, CardContent, CardHeader } from '../ui/card'
import { HeartIcon, IndianRupee } from 'lucide-react'
import { useContext, useState } from 'react'
import { Product } from 'src/types/components/product'
import Loader from '../layout/loader'
import { MyContext } from '../layout/context'

const ProductCard = ({ product, bestSellingSection }: { product: Product; bestSellingSection?: boolean }) => {
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
  if (!product.product_Images) {
    return <Loader />
  }
  const context = useContext(MyContext)
  if (!context) {
    throw new Error('MyContext must be used within a MyContextProvider')
  }
  const { userFavouritesData } = context
  const isProductInCart = userFavouritesData.filter((data) => data.id === product?.id)
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
              {product.product_Images.map((data, index) => (
                <img
                  key={index}
                  className={`${
                    bestSellingSection ? 'h-[250px] w-[250px]' : 'h-[150px] w-[150px]'
                  } rounded-t-lg object-cover`}
                  src={`${import.meta.env.VITE_STRAPI}${data.url}`}
                  alt="product image"
                />
              ))}
            </Slider>
            {isProductInCart.length > 0 && isProductInCart ? (
              <div className="absolute right-2 top-2 rounded-full bg-white p-1 opacity-80">
                <HeartIcon size={20} strokeWidth={0.6} color="red" fill="red" />
              </div>
            ) : (
              <div className="absolute right-2 top-2 rounded-full bg-white p-1 opacity-80">
                <HeartIcon size={20} strokeWidth={0.6} />
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex items-center py-2">
            <IndianRupee size={14} />
            <p>{Number(product.calculatedPrice).toLocaleString()}</p>
          </div>
          <p className="text-sm opacity-70">{product.product_Name}</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductCard
