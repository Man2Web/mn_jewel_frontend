import useGetProductData from 'src/hooks/products/getProductData'
import { Product } from 'src/types/components/product'

const ProductDetails = ({ product, quantity }: { product: Product; quantity: number }) => {
  const [productData] = useGetProductData(product.documentId)
  return (
    <div className="flex gap-2">
      <img className="h-40 w-40 rounded-lg" src={productData?.product_Images[0].url} />
      <div>
        <div>
          <h1 className="font-serif text-xl">{productData?.product_Name}</h1>
          <div className="flex items-center gap-2">
            <p>Quantity: </p>
            <h1 className="font-serif">{quantity}</h1>
          </div>
          <div className="flex items-center gap-2">
            <p>Price: </p>
            <h1 className="font-serif">{Number(productData?.calculatedPrice).toLocaleString()} /-</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
