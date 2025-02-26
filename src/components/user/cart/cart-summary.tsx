import { IndianRupeeIcon } from 'lucide-react'
import { UserCartData } from 'src/types/components/user'

const CartSummary = ({ userCartData }: { userCartData: UserCartData[] }) => {
  const totalPrice = userCartData.reduce((acc, data) => acc + data.quantity * data.product.calculatedPrice, 0)
  return (
    <div className="">
      <div className="my-2">
        <h1 className="font-serif text-2xl ">Order Summary</h1>
        <span className="block h-0.5 w-1/5 bg-red-400 md:w-[200px]" />
      </div>
      <div className="rounded-md border border-red-400 bg-red-50 p-4">
        <div className="flex flex-col gap-2">
          {userCartData.map((data, index) => (
            <div key={index} className="flex justify-between">
              <p className="font-serif">
                {data.product.product_Name} <span>({data.quantity} Quantity)</span>
              </p>
              <p className="flex items-center">
                <IndianRupeeIcon size={14} />
                {Number((data.quantity * data.product.calculatedPrice).toFixed(2)).toLocaleString()} /-
              </p>
            </div>
          ))}
          <span className="my-2 block  h-0.5 w-full bg-red-400" />
          <div className="flex justify-between">
            <p className="font-serif">Total Price</p>
            <p className="flex items-center">
              <IndianRupeeIcon size={14} />
              {Number(totalPrice).toLocaleString()} /-
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartSummary
