import { useContext, useState } from 'react'
import { MyContext } from 'src/components/layout/context'
import { Button } from 'src/components/ui/button'
import UserCart from 'src/components/user/cart/cart'

const Cart = () => {
  const context = useContext(MyContext)
  if (!context) {
    throw new Error('MyContext must be used within a MyContextProvider')
  }
  const { userCartData } = context
  const [productsAvailable, setProductsAvailable] = useState(false)
  return (
    <section className="p-4 lg:px-6 lg:py-8">
      <div className="my-2">
        <h1 className="font-serif text-2xl ">Cart</h1>
        <span className="block h-0.5 w-1/5 bg-red-400 md:w-[100px]" />
      </div>
      <div>
        {userCartData.length > 0 &&
          userCartData.map((data, index) => (
            <div className="mb-2" key={index}>
              <UserCart setProductsAvailable={setProductsAvailable} cartItem={data} />
            </div>
          ))}
        {userCartData.length === 0 && <p>Your cart is empty</p>}
        {userCartData.length > 0 && (
          <div className="flex w-full justify-center">
            <Button disabled={productsAvailable} variant="primary" className="w-full md:w-[200px]">
              Proceed to Checkout
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Cart
