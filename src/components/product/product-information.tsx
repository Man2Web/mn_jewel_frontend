import { IndianRupeeIcon, MailQuestionIcon, ShoppingBagIcon } from 'lucide-react'
import { Button } from '../ui/button'
import ProductDetails from './product-details'
import ProductFeatures from './product-features'
import { Product } from 'src/types/components/product'
import ProductPriceBreakdown from './product-price-breakdown'
import { Dialog, DialogTrigger } from '../ui/dialog'
import InquireProduct from './inquire-product'
import { useAddToCart } from 'src/hooks/user/user'

const ProductInformation = ({ product }: { product: Product | undefined }) => {
  if (!product) {
    return null
  }
  const [addProduct] = useAddToCart()
  return (
    <Dialog>
      <div className="lg:p-4">
        <h1 className="font-serif text-xl tracking-wide lg:text-4xl">{product.product_Name}</h1>
        <p className="text-sm font-medium opacity-50">{product.sku_Id}</p>
        <div className="flex items-center py-2">
          <IndianRupeeIcon size={18} strokeWidth={2} />
          <h1 className="flex items-center gap-2 text-xl">
            {Number(product.calculatedPrice).toLocaleString()}
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
          <Button
            onClick={() => addProduct(product && product.id)}
            disabled={product.stock_Quantity === 0}
            variant="primary"
            className="flex w-1/2 gap-2"
          >
            <ShoppingBagIcon strokeWidth={1.5} />
            Add to Cart
          </Button>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 py-4 lg:grid-cols-3">
          <ProductDetails
            title="Basic Information"
            points={[
              { key: 'Material', value: product.basic_Information.material },
              { key: 'Material Purity', value: product.material_type.name },
              { key: 'Gross Weight', value: `${product.basic_Information.gross_Weight} gms` },
              { key: 'Height', value: `${product.basic_Information.Height} cms` },
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
          <ProductDetails
            title="Other Information"
            points={[
              { key: 'Ornament Type', value: product.category.name },
              { key: 'Metal Color', value: product.metal_Color },
              { key: 'Tags', value: product.tag.name },
            ]}
          />
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
