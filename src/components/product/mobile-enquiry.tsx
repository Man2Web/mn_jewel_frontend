import { MailQuestionIcon, ShoppingBagIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { Dialog, DialogTrigger } from '../ui/dialog'
import InquireProduct from './inquire-product'
import { Product } from 'src/types/components/product'
import { useAddToCart, useRemoveFromCart } from 'src/hooks/user/user'
import { useContext } from 'react'
import { MyContext } from '../layout/context'

const MobileEnquiry = ({
  productId,
  productData,
}: {
  productId: string | undefined
  productData: Product | undefined
}) => {
  const [addProduct] = useAddToCart()
  const [removeProduct] = useRemoveFromCart()
  const context = useContext(MyContext)
  if (!context) {
    throw new Error('MyContext must be used within a MyContextProvider')
  }
  const { userCartData } = context
  const isProductInCart = userCartData.filter((data) => data.id === productData?.id)
  return (
    <div className="fixed bottom-0 flex w-full gap-2 bg-white px-4 py-2 lg:hidden">
      <Dialog>
        <DialogTrigger className="flex w-1/2 gap-2">
          <Button variant="primary" className="flex w-full gap-2">
            <MailQuestionIcon strokeWidth={1.5} />
            Inquire Product
          </Button>
        </DialogTrigger>
        {isProductInCart.length > 0 ? (
          <Button
            onClick={() => removeProduct(productData && productData.id)}
            variant="primary"
            className="flex w-1/2 gap-2"
          >
            <ShoppingBagIcon strokeWidth={1.5} />
            Remove from Cart
          </Button>
        ) : (
          <Button
            disabled={productData?.stock_Quantity === 0}
            onClick={() => addProduct(productData && productData.id)}
            variant="primary"
            className="flex w-1/2 gap-2"
          >
            <ShoppingBagIcon strokeWidth={1.5} />
            Add to Cart
          </Button>
        )}
        <InquireProduct productId={productId} />
      </Dialog>
    </div>
  )
}

export default MobileEnquiry
