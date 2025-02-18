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
  }))

  const payload = {
    data: {
      user: userData?.id,
      products: userCartProductsData,
      userAddress: { ...data },
    },
  }

  try {
    const response = await axios.post(`${import.meta.env.VITE_STRAPI_API}/orders`, payload, {
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    })

    if (response.status === 200 || response.status === 201) {
      toast.success("We've received your enquiry. We'll get back to you soon.")
    } else {
      toast.error('Something went wrong')
    }
  } catch (error) {
    console.error('Error during API call:', error)
    toast.error('An error occurred. Please try again.')
  }
}
