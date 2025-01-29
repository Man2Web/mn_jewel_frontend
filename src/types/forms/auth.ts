import { z } from 'zod'

export interface SignUpFormInterface {
  email: string
  username: string
  password: string
}

export const SignUpFormInterfaceSchema = z.object({
  email: z.string().nonempty('Email is required').email('Invalid email address'),
  username: z
    .string()
    .nonempty('Phone number is required')
    .regex(/^\d{10}$/, 'Invalid phone number'),
  password: z.string().regex(/^\d{6}$/, 'Password must be exactly 6 digits and consist of numbers only'),
})

export interface LoginFormInterface {
  username: string
  password: string
}

export const LoginFormInterfaceSchema = z.object({
  username: z
    .string()
    .nonempty('Phone number is required')
    .regex(/^\d{10}$/, 'Invalid phone number'),
  password: z.string().regex(/^\d{6}$/, 'Password must be exactly 6 digits and consist of numbers only'),
})
