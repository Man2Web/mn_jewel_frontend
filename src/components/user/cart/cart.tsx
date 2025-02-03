import { TrashIcon } from 'lucide-react'
import { Button } from 'src/components/ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from 'src/components/ui/select'
import useGetProductData from 'src/hooks/products/getProductData'
import { useRemoveFromCart } from 'src/hooks/user/user'
import { Product } from 'src/types/components/product'

const UserCart = ({ cartItem }: { cartItem: Product }) => {
  const [productData] = useGetProductData(cartItem.documentId)
  const [removeProduct] = useRemoveFromCart()
  return (
    <div className="flex gap-2">
      <div>
        <img
          className="max-h-32 w-[150px] max-w-[150px] rounded-sm md:max-h-40 md:w-[200px] md:max-w-[200px]"
          src={`${import.meta.env.VITE_STRAPI}${productData?.product_Images[0].url}`}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-serif text-xl">{productData?.product_Name}</h1>
        <div>
          <Select defaultValue={`${1}`}>
            <SelectTrigger className="w-[100px]">
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
          <Button
            onClick={() => {
              removeProduct(cartItem.id)
            }}
            variant="primary"
            className="flex items-center gap-1"
          >
            <span className="md:text-md text-sm">
              <TrashIcon />
            </span>
            Remove Item
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UserCart
