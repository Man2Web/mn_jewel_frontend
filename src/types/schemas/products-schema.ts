import { z } from 'zod'

export const productSchema = z.object({
  sortOption: z.string(),
})
