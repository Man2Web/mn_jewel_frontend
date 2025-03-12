import axios from 'axios'
import toast from 'react-hot-toast'
import { User } from 'src/types/components/user'
import { DigitalOrderInterface } from 'src/types/forms/digital-order'

export const digitalPurchaseCheckoutForm = async (data: DigitalOrderInterface, userData: User | undefined) => {
  const jwt = localStorage.getItem('token')
  if (!jwt) return
  const payload = {
    user: userData?.id,
    ...data,
  }
  try {
    const response = await axios.post(`${import.meta.env.VITE_PAYMENT_API}/digital-orders/order`, payload, {
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
