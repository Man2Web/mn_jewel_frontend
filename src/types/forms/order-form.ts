import { z } from 'zod'

export interface OrderForm {
  email: string
  phoneNumber: string
  name: string
  address: string
  city: string
  pincode: string
}

export const OrderFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  phoneNumber: z.string().min(10, { message: 'Phone number must be at least 10 digits' }),
  name: z.string().min(1, { message: 'Full name is required' }),
  address: z.string().min(1, { message: 'Address is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  pincode: z.string().min(6, { message: 'Pincode must be at least 6 digits' }),
})
