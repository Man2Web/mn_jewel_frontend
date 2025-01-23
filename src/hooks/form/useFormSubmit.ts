import axios from 'axios'
import { toast } from 'react-hot-toast'
import { ProductEnquiryFormInterface } from 'src/types/forms/products-enquiry'

async function useFormSubmit(data: ProductEnquiryFormInterface, productId: string | undefined) {
  try {
    const response = await axios.post(`${import.meta.env.VITE_STRAPI_API}/product-enquiries`, {
      data: { ...data, product: productId },
    })
    response.status
      ? toast.success("We've received your enquiry. We'll get back to you soon.")
      : toast.error('Something went wrong')
  } catch (error) {
    console.error(error)
  }
}

export default useFormSubmit
