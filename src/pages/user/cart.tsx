import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from 'src/components/ui/button'
import AddressCollectionForm from 'src/components/user/cart/address-collection-form'
import UserCartItem from 'src/components/user/cart/cart-items'
import CartSummary from 'src/components/user/cart/cart-summary'
import NoDataAvailable from 'src/components/user/no-data-available'
import { purchaseCheckoutForm } from 'src/hooks/form/purchaseCheckoutForm'
import { useGetUserData, useUserCartData } from 'src/hooks/user/user'
import { OrderForm, OrderFormSchema } from 'src/types/forms/order-form'

const Cart = () => {
  const { userCartProducts, setUserCartProducts } = useUserCartData()
  const [productsAvailable, setProductsAvailable] = useState(false)
  const [progress, setProgress] = useState(0)
  const methods = useForm<OrderForm>({
    resolver: zodResolver(OrderFormSchema),
  })
  const { handleSubmit } = methods
  const { userData } = useGetUserData()
  return (
    <section>
      {userCartProducts.length > 0 ? (
        <form
          onSubmit={handleSubmit((data) => purchaseCheckoutForm(data, userCartProducts, userData))}
          className="p-4 lg:px-6 lg:py-8"
        >
          {/* <ProductFeatures /> */}
          <div className="flex flex-col justify-between gap-2 lg:flex-row">
            <section className="w-full lg:w-4/6">
              <div className="my-2">
                <h1 className="font-serif text-2xl">{progress === 0 ? 'Cart' : 'Address Details'}</h1>
                <span className="block h-0.5 w-1/5 bg-red-400 md:w-[100px]" />
              </div>
              <div>
                {userCartProducts.length > 0 && progress === 0 ? (
                  userCartProducts.map((data, index) => (
                    <div className="mb-2" key={index}>
                      <UserCartItem
                        setProductsAvailable={setProductsAvailable}
                        setUserCartProducts={setUserCartProducts}
                        cartItem={data}
                      />
                    </div>
                  ))
                ) : (
                  <AddressCollectionForm methods={methods} />
                )}
              </div>
            </section>
            <section className="w-full lg:w-2/6">
              {userCartProducts.length > 0 && (
                <div className="w-full">
                  <CartSummary userCartData={userCartProducts} />
                </div>
              )}
            </section>
          </div>
          {userCartProducts.length > 0 && (
            <div className="my-4 flex w-full justify-center">
              {progress === 0 ? (
                <Button
                  type="button"
                  onClick={() => setProgress(1)}
                  disabled={productsAvailable}
                  variant="primary"
                  className="w-full md:w-[200px]"
                >
                  Proceed to checkout
                </Button>
              ) : (
                <Button
                  type="submit"
                  onClick={() => setProgress(1)}
                  disabled={productsAvailable}
                  variant="primary"
                  className="w-full md:w-[200px]"
                >
                  Place Order
                </Button>
              )}
            </div>
          )}
        </form>
      ) : (
        <NoDataAvailable title="Your Cart is Empty" />
      )}
    </section>
  )
}

export default Cart
