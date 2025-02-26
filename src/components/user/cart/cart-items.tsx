import { IndianRupeeIcon, TrashIcon } from 'lucide-react'
import { Button } from 'src/components/ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from 'src/components/ui/select'
import useGetProductData from 'src/hooks/products/getProductData'
import { useRemoveFromCart } from 'src/hooks/user/user'
import { UserCartData } from 'src/types/components/user'

const UserCartItem = ({
  cartItem,
  setUserCartProducts,
  setProductsAvailable,
}: {
  cartItem: UserCartData
  setUserCartProducts: (data: (prevData: UserCartData[]) => UserCartData[]) => void
  setProductsAvailable: (data: boolean) => void
}) => {
  const [productData] = useGetProductData(cartItem.product.documentId)
  const [removeProduct] = useRemoveFromCart()
  if (productData && productData?.stock_Quantity <= 0) {
    setProductsAvailable(true)
  }
  return (
    <div>
      <div className="flex gap-2">
        <div>
          <img
            className="max-h-[150px] min-h-[150px] w-[175px] max-w-[175px] rounded-sm md:max-h-40 md:w-[200px] md:max-w-[200px]"
            src={`${productData?.product_Images[0].url}`}
          />
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
          <div className="flex items-center gap-2 md:justify-between md:gap-0">
            <div>
              <Select
                onValueChange={(value) => {
                  setUserCartProducts((prevData) =>
                    prevData.map((item) =>
                      item.product.documentId === cartItem.product.documentId
                        ? { ...item, quantity: Number(value) }
                        : item,
                    ),
                  )
                }}
                value={`${cartItem.quantity}`}
              >
                <SelectTrigger className="w-[75px] md:w-[100px]">
                  <SelectValue placeholder="Quantity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {Array.from({ length: Number(productData?.stock_Quantity) }, (_, i) => (
                      <SelectItem key={i} value={`${i + 1}`}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <div>
                <Button
                  onClick={() => {
                    removeProduct(cartItem.product.id)
                    if (productData && productData?.stock_Quantity <= 0) window.location.href = ''
                  }}
                  variant="primary"
                  className="flex items-center gap-1"
                >
                  <span className="md:text-md text-sm">
                    <TrashIcon />
                  </span>
                </Button>
              </div>
            </div>
          </div>
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

export default UserCartItem
