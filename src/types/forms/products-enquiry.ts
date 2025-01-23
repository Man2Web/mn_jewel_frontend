import { z, ZodType } from 'zod'

export interface ProductEnquiryFormInterface {
  name: string
  phone_number: string
  email: string
  additional_message?: string
}

export const ProductEnquiryFormInterfaceSchema: ZodType<ProductEnquiryFormInterface> = z.object({
  name: z.string().nonempty('Name is required'),
  phone_number: z
    .string()
    .nonempty('Phone number is required')
    .regex(/^\d{10}$/, 'Invalid phone number'),
  email: z.string().nonempty('Email is required').email('Invalid email address'),
  additional_message: z.string().optional(),
})
