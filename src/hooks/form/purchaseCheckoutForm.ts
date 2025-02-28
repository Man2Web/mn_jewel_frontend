import axios from 'axios'
import toast from 'react-hot-toast'
import { User, UserCartData } from 'src/types/components/user'
import { OrderForm } from 'src/types/forms/order-form'

export const purchaseCheckoutForm = async (
  data: OrderForm,
  userCartProducts: UserCartData[],
  userData: User | undefined,
) => {
  const jwt = localStorage.getItem('token')
  if (!jwt) return
  const userCartProductsData = userCartProducts.map((item) => ({
    product: item.product.id,
    quantity: item.quantity,
    documentId: item.product.documentId,
  }))

  const totalPrice = userCartProducts.reduce((acc, data) => acc + data.quantity * data.product.calculatedPrice, 0)

  const payload = {
    data: {
      user: userData?.id,
      products: userCartProductsData,
      userAddress: { ...data },
      totalPrice,
    },
  }
  try {
    const response = await axios.post(`${import.meta.env.VITE_PAYMENT_API}/payment`, payload, {
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    })
    if (response.status === 200 || response.status === 201) {
      try {
        window.location.href = response.data.redirectUrl
      } catch (error) {
        console.error(error)
        toast.error('Error adding product to cart')
      }
    } else {
      toast.error('Something went wrong')
    }
  } catch (error) {
    console.error('Error during API call:', error)
    toast.error('An error occurred. Please try again.')
  }
}
