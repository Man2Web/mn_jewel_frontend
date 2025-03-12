import { useEffect } from 'react'
import { Button } from 'src/components/ui/button'
import { DialogContent, DialogHeader, DialogTitle } from 'src/components/ui/dialog'
import { getAllCoupons } from 'src/hooks/coupons/coupons'
import { Coupon } from 'src/types/components/coupon'
import { UserCartData } from 'src/types/components/user'

const CouponsModal = ({
  setUserSelectedCoupon,
  userSelectedCoupon,
  totalPrice,
  userCartData,
}: {
  setUserSelectedCoupon: (data: Coupon | undefined) => void
  userSelectedCoupon: Coupon | undefined
  totalPrice: number
  userCartData: UserCartData[]
}) => {
  const [coupons] = getAllCoupons(userCartData)
  const products = userCartData.map((data) => data.product.documentId)
  useEffect(() => {
    if (!userSelectedCoupon) return
    if (!coupons.includes(userSelectedCoupon)) setUserSelectedCoupon(undefined)
  }, [products])
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Available Coupons</DialogTitle>
      </DialogHeader>
      {coupons.length > 0 &&
        coupons.map((data, index) => (
          <div className="flex items-center justify-between rounded-lg border border-red-400 bg-red-50 p-2" key={index}>
            <div>
              <h1 className="font-serif text-lg">{data.couponName}</h1>
              <p className="text-sm">{data.couponDescription}</p>
              {totalPrice < Number(data.minCartValue) && (
                <p className="text-sm text-red-400">
                  Add items worth {Number(Number(data.minCartValue - totalPrice).toFixed(2)).toLocaleString()} to avail
                  this Coupon
                </p>
              )}
            </div>
            <div>
              <Button
                disabled={data.documentId === userSelectedCoupon?.documentId || totalPrice < Number(data.minCartValue)}
                onClick={() => setUserSelectedCoupon(data)}
                variant="primary"
              >
                {data.documentId === userSelectedCoupon?.documentId ? 'Applied' : 'Apply'}
              </Button>
            </div>
          </div>
        ))}
      {coupons.length === 0 && (
        <div>
          <h1 className="font-serif text-xl ">No Coupons Available</h1>
        </div>
      )}
    </DialogContent>
  )
}

export default CouponsModal
