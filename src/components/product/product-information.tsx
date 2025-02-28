import { IndianRupeeIcon, MailQuestionIcon, ShoppingBagIcon } from 'lucide-react'
import { Button } from '../ui/button'
import ProductDetails from './product-details'
import ProductFeatures from './product-features'
import { Product } from 'src/types/components/product'
import ProductPriceBreakdown from './product-price-breakdown'
import { Dialog, DialogTrigger } from '../ui/dialog'
import InquireProduct from './inquire-product'
import { useAddToCart, useRemoveFromCart } from 'src/hooks/user/user'
import { useContext } from 'react'
import { MyContext } from '../layout/context'

const ProductInformation = ({ product }: { product: Product | undefined }) => {
  if (!product) {
    return null
  }
  const [addProduct] = useAddToCart()
  const [removeProduct] = useRemoveFromCart()
  const context = useContext(MyContext)
  if (!context) {
    throw new Error('MyContext must be used within a MyContextProvider')
  }
  const { userCartData } = context
  const isProductInCart = userCartData.filter((data) => data.id === product?.id)
  return (
    <Dialog>
      <div className="lg:p-4">
        <h1 className="font-serif text-xl tracking-wide lg:text-4xl">{product.product_Name}</h1>
        <p className="text-sm font-medium opacity-50">{product.sku_Id}</p>
        <div className="flex items-center py-2">
          <IndianRupeeIcon size={18} strokeWidth={2} />
          <h1 className="flex items-center gap-2 text-xl">
            {Number(product.calculatedPrice.toFixed(2)).toLocaleString()}
            <span className="text-sm font-medium opacity-50">(Approx)</span>
          </h1>
        </div>
        <div className="hidden w-full gap-2 lg:flex">
          <DialogTrigger className="flex w-1/2 gap-2">
            <Button variant="primary" className="flex w-full gap-2">
              <MailQuestionIcon strokeWidth={1.5} />
              Inquire Product
            </Button>
          </DialogTrigger>
          {isProductInCart.length > 0 ? (
            <Button onClick={() => removeProduct(product && product.id)} variant="primary" className="flex w-1/2 gap-2">
              <ShoppingBagIcon strokeWidth={1.5} />
              Remove from Cart
            </Button>
          ) : (
            <Button
              disabled={product?.stock_Quantity === 0}
              onClick={() => addProduct(product && product.id)}
              variant="primary"
              className="flex w-1/2 gap-2"
            >
              <ShoppingBagIcon strokeWidth={1.5} />
              Add to Cart
            </Button>
          )}
        </div>
        <div className="grid w-full grid-cols-1 gap-4 py-4 lg:grid-cols-3">
          <ProductDetails
            title="Basic Information"
            points={[
              { key: 'Material', value: product.material },
              { key: 'Material Purity', value: product.material_type.name },
              { key: 'Gross Weight', value: `${product.item_Gross_Weight} gms` },
              { key: 'Height', value: `${product.item_Height} cms` },
            ]}
          />
          {product.stone_information && (
            <ProductDetails
              title="Stone Information"
              points={product.stone_information.map((data) => {
                return {
                  key: data.stone_name,
                  value: `${data.stone_weight} gms`,
                  price: data.stone_price,
                }
              })}
            />
          )}
          {!product.tag ? (
            <ProductDetails
              title="Other Information"
              points={[
                { key: 'Ornament Type', value: product.category.name },
                { key: 'Metal Color', value: product.metal_Color },
              ]}
            />
          ) : (
            <ProductDetails
              title="Other Information"
              points={[
                { key: 'Ornament Type', value: product.category.name },
                { key: 'Metal Color', value: product.metal_Color },
                { key: 'Tags', value: product.tag?.name },
              ]}
            />
          )}
        </div>
        <div className="w-full pb-4">
          <ProductPriceBreakdown title="Price Breakdown" product={product} />
        </div>
        <div className="block lg:hidden">
          <ProductFeatures />
        </div>
      </div>
      <InquireProduct productId={product.documentId} />
    </Dialog>
  )
}

export default ProductInformation
