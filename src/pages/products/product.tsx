import { HeartIcon } from 'lucide-react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import { MyContext } from 'src/components/layout/context'
import MobileEnquiry from 'src/components/product/mobile-enquiry'
import ProductFeatures from 'src/components/product/product-features'
import ProductInformation from 'src/components/product/product-information'
import SimilarProducts from 'src/components/product/similar-products'
import useGetProductData from 'src/hooks/products/getProductData'
import { useAddToFavourites, useRemoveFromFavourites } from 'src/hooks/user/user'

const Product = () => {
  const { productId } = useParams()
  const [productData] = useGetProductData(productId)
  const context = useContext(MyContext)
  if (!context) {
    throw new Error('MyContext must be used within a MyContextProvider')
  }
  const { userFavouritesData } = context
  const settings = {
    autoplay: true,
    autoplaySpeed: 2500,
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
  const [addProduct] = useAddToFavourites()
  const [removeProduct] = useRemoveFromFavourites()
  const isProductInCart = userFavouritesData.filter((data) => data.id === productData?.id)
  return (
    <section>
      <div className="flex flex-col px-4 py-6 lg:flex-row">
        <div className="relative overflow-hidden lg:w-1/2 lg:px-2">
          <Slider {...settings}>
            {productData?.product_Images.map((data, index) => (
              <div key={index}>
                <img
                  className="h-96 w-full rounded-lg lg:h-[750px] lg:w-[900px]"
                  src={`${data.url}`}
                  alt="Product Image"
                />
              </div>
            ))}
          </Slider>
          {isProductInCart.length > 0 && isProductInCart ? (
            <div
              onClick={() => removeProduct(productData?.id)}
              className="absolute right-2 top-2 rounded-full bg-white p-1 opacity-80 hover:cursor-pointer md:right-4"
            >
              <HeartIcon size={20} strokeWidth={0.6} color="red" fill="red" />
            </div>
          ) : (
            <div
              onClick={() => addProduct(productData?.id)}
              className="absolute right-2 top-2 rounded-full bg-white p-1 opacity-80 hover:cursor-pointer md:right-4"
            >
              <HeartIcon size={20} strokeWidth={0.6} />
            </div>
          )}
          <div className="my-4 hidden w-full lg:block">
            <ProductFeatures />
          </div>
        </div>
        <div className="lg:w-1/2 lg:px-2">
          <ProductInformation product={productData} />
        </div>
      </div>
      <div className="px-4 pb-6">
        <SimilarProducts />
      </div>
      <MobileEnquiry productId={productId} productData={productData} />
    </section>
  )
}

export default Product
