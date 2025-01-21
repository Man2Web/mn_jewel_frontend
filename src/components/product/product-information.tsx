import { HeartIcon, IndianRupeeIcon, MailQuestionIcon, UserPlusIcon } from 'lucide-react'
import { Button } from '../ui/button'
import ProductDetails from './product-details'
import ProductFeatures from './product-features'
import { Product } from 'src/types/components/product'
// import { otherInformation, productDetails, stoneDetails } from 'src/data/components/product'

const ProductInformation = ({ product }: { product: Product | undefined }) => {
  if (!product) {
    return null
  }
  return (
    <div className="lg:p-4">
      <h1 className="font-serif text-xl tracking-wide lg:text-4xl">{product.product_Name}</h1>
      <p className="text-sm font-medium opacity-50">{product.sku_Id}</p>
      <div className="flex items-center py-2">
        <IndianRupeeIcon size={18} strokeWidth={2} />
        <h1 className="flex items-center gap-2 text-xl">
          {Number(
            product.item_Net_Weight * product.material_type.price +
              product.value_Addition * product.material_type.price +
              product.other_Stone_Price +
              (product.gst + (product.material_type.price + product.value_Addition + product.other_Stone_Price)),
          ).toLocaleString()}
          <span className="text-sm font-medium opacity-50">(Approx)</span>
        </h1>
      </div>
      <div className="hidden w-full gap-2 lg:flex">
        <Button variant="primary" className="flex w-1/2 gap-2 ">
          <span>
            <MailQuestionIcon strokeWidth={1.5} />
          </span>
          Inquire Product
        </Button>
        <Button variant="primary" className="flex w-1/2 gap-2 ">
          <span>
            <UserPlusIcon strokeWidth={1.5} />
          </span>
          Inquire Product
        </Button>
        <Button variant="primary" className="flex gap-2">
          <span>
            <HeartIcon strokeWidth={1.5} />
          </span>
        </Button>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 py-4 lg:grid-cols-3">
        <ProductDetails
          title="Basic Information"
          points={[
            { key: 'Material', value: product.basic_Information.material },
            { key: 'Material Purity', value: product.basic_Information.metal_Purity },
            { key: 'Gross Weight', value: `${product.basic_Information.gross_Weight} gms` },
            { key: 'Height', value: `${product.basic_Information.Height} cms` },
          ]}
        />
        {product.stone_information && (
          <ProductDetails
            title="Stone Information"
            points={product.stone_information.map((data) => {
              return { key: data.stone_name, value: data.stone_weight }
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
      <div>
        <ProductFeatures />
      </div>
    </div>
  )
}

export default ProductInformation
