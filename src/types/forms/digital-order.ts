import { z } from 'zod'

export const digitalOrderFormSchema = z.object({
  materialType: z.string().nonempty('Material type is required'),
  grams: z
    .number({ invalid_type_error: 'Grams must be a number' })
    .positive('Grams must be a positive number')
    .min(0.01, 'Grams must be at least 1'),
  amount: z
    .number({ invalid_type_error: 'Amount must be a number' })
    .positive('Amount must be a positive number')
    .min(250, 'Amount must be at least 250/-'),
})

export interface DigitalOrderInterface {
  materialType: string
  grams: number
  amount: number
}
