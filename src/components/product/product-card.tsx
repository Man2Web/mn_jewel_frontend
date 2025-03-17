import { Card, CardContent, CardHeader } from '../ui/card'
import { HeartIcon, IndianRupee } from 'lucide-react'
import { useContext } from 'react'
import { Product } from 'src/types/components/product'
import { MyContext } from '../layout/context'

const ProductCard = ({ product, bestSellingSection }: { product: Product; bestSellingSection?: boolean }) => {
  const context = useContext(MyContext)
  if (!context) {
    throw new Error('MyContext must be used within a MyContextProvider')
  }
  const { userFavouritesData } = context
  const isProductInCart = userFavouritesData.filter((data) => data.id === product?.id)
  return (
    <Card className="border-none shadow-none">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <div className="relative">
            <img
              className={`${
                bestSellingSection ? 'h-full w-full lg:h-[350px]' : 'h-[150px] w-[150px]'
              } rounded-lg object-cover`}
              src={`${product.product_Images[0].url}`}
              alt="product image"
            />
            {isProductInCart.length > 0 && isProductInCart ? (
              <div className="absolute right-4 top-2 rounded-full bg-white p-1 opacity-80">
                <HeartIcon size={20} strokeWidth={0.6} color="red" fill="red" />
              </div>
            ) : (
              <div className="absolute right-4 top-2 rounded-full bg-white p-1 opacity-80">
                <HeartIcon size={20} strokeWidth={0.6} />
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex items-center py-2">
          <IndianRupee size={14} />
          <p>{Number(product.calculatedPrice.toFixed(2)).toLocaleString()}</p>
        </div>
        <p className="text-sm opacity-70">{product.product_Name}</p>
      </CardContent>
    </Card>
  )
}

export default ProductCard
