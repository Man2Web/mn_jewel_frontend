import { Product } from 'src/types/components/product'

const CartSummary = ({ userCartData }: { userCartData: Product[] }) => {
  let totalPrice = 0
  userCartData.forEach((data) => (totalPrice += Number(data.calculatedPrice)))
  console.log(totalPrice)
  console.log(userCartData)
  return (
    <div>
      <div className="my-2">
        <h1 className="font-serif text-2xl ">Order Summary</h1>
        <span className="block h-0.5 w-1/5 bg-red-400 md:w-[200px]" />
      </div>
      <div className="rounded-md border border-red-400 bg-red-50 p-4">
        <div>
          <p>Actual Price</p>
          <p>{totalPrice.toLocaleString()}</p>
        </div>
      </div>
    </div>
  )
}

export default CartSummary
