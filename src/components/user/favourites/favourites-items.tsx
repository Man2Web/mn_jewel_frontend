import { HeartIcon, IndianRupeeIcon, ShoppingBagIcon } from 'lucide-react'
import { useContext } from 'react'
import { MyContext } from 'src/components/layout/context'
import { Button } from 'src/components/ui/button'
import useGetProductData from 'src/hooks/products/getProductData'
import { useAddToCart, useAddToFavourites, useRemoveFromCart, useRemoveFromFavourites } from 'src/hooks/user/user'
import { Product } from 'src/types/components/product'
import { UserCartData } from 'src/types/components/user'

const UserFavouritesItem = ({
  item,
  setUserCartProducts,
}: {
  item: Product
  setUserCartProducts: (data: (prevData: UserCartData[]) => UserCartData[]) => void
}) => {
  const [productData] = useGetProductData(item.documentId)
  const [removeProduct] = useRemoveFromCart()
  const [addProduct] = useAddToCart()
  const [removeFromFavourite] = useRemoveFromFavourites()
  const [addProductToFavourite] = useAddToFavourites()

  const context = useContext(MyContext)
  if (!context) {
    throw new Error('MyContext must be used within a MyContextProvider')
  }
  const { userCartData, userFavouritesData } = context
  const isProductInCart = userCartData.filter((data) => data.id === productData?.id)
  const isProductFavourite = userFavouritesData.filter((data) => data.id === productData?.id)
  return (
    <div>
      <div className="flex gap-2">
        <div className="relative">
          <img
            className="max-h-[150px] min-h-[150px] w-[175px] max-w-[175px] rounded-sm md:max-h-40 md:w-[200px] md:max-w-[200px]"
            src={`${productData?.product_Images[0].url}`}
          />
          {isProductFavourite ? (
            <div
              onClick={() => removeFromFavourite(productData?.id)}
              className="absolute right-2 top-2 rounded-full bg-white p-1 opacity-80 hover:cursor-pointer md:right-4"
            >
              <HeartIcon size={20} strokeWidth={0.6} color="red" fill="red" />
            </div>
          ) : (
            <div
              onClick={() => addProductToFavourite(productData?.id)}
              className="absolute right-2 top-2 rounded-full bg-white p-1 opacity-80 hover:cursor-pointer md:right-4"
            >
              <HeartIcon size={20} strokeWidth={0.6} />
            </div>
          )}
        </div>
        <div className="flex w-full flex-col gap-2">
          <h1 className="font-serif text-xl">{productData?.product_Name}</h1>
          <div className="flex items-center py-2">
            <IndianRupeeIcon size={18} strokeWidth={2} />
            <h1 className="text-md flex items-center gap-2 md:text-xl">
              {Number(productData?.calculatedPrice.toFixed(2)).toLocaleString()}
              <span className="text-xs font-medium opacity-50 md:text-sm">(Approx)</span>
            </h1>
          </div>
          {isProductInCart.length > 0 ? (
            <div className="mt-auto w-full">
              <Button
                onClick={() => removeProduct(productData && productData.id)}
                variant="primary"
                className="flex gap-2"
              >
                <ShoppingBagIcon strokeWidth={1.5} />
                {productData?.stock_Quantity === 0 ? 'Out of stock' : 'Remove from Cart'}
              </Button>
            </div>
          ) : (
            <div className="mt-auto w-full">
              <Button
                disabled={productData?.stock_Quantity === 0}
                onClick={() => addProduct(productData && productData.id)}
                variant="primary"
                className="flex gap-2"
              >
                <ShoppingBagIcon strokeWidth={1.5} />
                {productData?.stock_Quantity === 0 ? 'Out of stock' : 'Add to Cart'}
              </Button>
            </div>
          )}
        </div>
      </div>
      {productData && productData?.stock_Quantity <= 0 && (
        <p className="mx-auto pt-2 text-sm text-red-400">
          This item is currently out of stock remove the item from the cart to proceed to checkout.
        </p>
      )}
    </div>
  )
}

export default UserFavouritesItem
