import { IndianRupeeIcon } from 'lucide-react'
import { Button } from 'src/components/ui/button'
import { DialogTrigger } from 'src/components/ui/dialog'
import { UserCartData } from 'src/types/components/user'
import CouponsModal from './coupons-modal'
import { Coupon } from 'src/types/components/coupon'
import { calculateDiscountedPrice } from 'src/hooks/coupons/coupons'

const CartSummary = ({
  userCartData,
  userSelectedCoupon,
  setUserSelectedCoupon,
}: {
  userCartData: UserCartData[]
  userSelectedCoupon: Coupon | undefined
  setUserSelectedCoupon: (data: Coupon | undefined) => void
}) => {
  const totalPrice = userCartData.reduce((acc, data) => acc + data.quantity * data.product.calculatedPrice, 0)
  const discountResult = calculateDiscountedPrice(totalPrice, userSelectedCoupon)
  const discountAmount = typeof discountResult === 'number' ? 0 : discountResult.discountAmount
  const discountedPrice = typeof discountResult === 'number' ? discountResult : discountResult.discountedPrice
  return (
    <div>
      <CouponsModal
        totalPrice={totalPrice}
        userSelectedCoupon={userSelectedCoupon}
        setUserSelectedCoupon={setUserSelectedCoupon}
        userCartData={userCartData}
      />
      <div className="my-2 flex justify-between">
        <div>
          <h1 className="font-serif text-2xl ">Order Summary</h1>
          <span className="block h-0.5 w-1/5 bg-red-400 md:w-[200px]" />
        </div>
        <DialogTrigger>
          <Button variant="primary">Available Coupon</Button>
        </DialogTrigger>
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
          {userSelectedCoupon && (
            <div className="flex justify-between">
              <p className="font-serif">
                Coupon Discount{' '}
                {userSelectedCoupon && (
                  <span
                    onClick={() => setUserSelectedCoupon(undefined)}
                    className="font-serif text-sm text-red-400 hover:cursor-pointer"
                  >
                    Remove Coupon
                  </span>
                )}
              </p>
              <p className="flex items-center">
                <IndianRupeeIcon size={14} />
                {Number(discountAmount.toFixed(2)).toLocaleString()} /-
              </p>
            </div>
          )}
          <span className="my-2 block  h-0.5 w-full bg-red-400" />
          <div className="flex justify-between">
            <p className="font-serif">Total Price</p>
            <p className="flex items-center">
              <IndianRupeeIcon size={14} />
              {Number(discountedPrice.toFixed(2)).toLocaleString()} /-
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartSummary
