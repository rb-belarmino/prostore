import { z } from 'zod'
import { formatNumberWithDecimal } from './utils'

const currency = z
  .string()
  .refine(
    value => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    'Price must be a valid number with two decimal places'
  )

// Schema for inserting products
export const insertProductSchema = z.object({
  name: z.string().min(3, 'Name must be at leats 3 characters'),
  slug: z.string().min(3, 'Slug must be at leats 3 characters'),
  category: z.string().min(3, 'Category must be at leats 3 characters'),
  brand: z.string().min(3, 'Brand must be at leats 3 characters'),
  description: z.string().min(3, 'Description must be at leats 3 characters'),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, 'At least one image is required'),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency
})

// Schema for signing users in

export const signInFormSchema = z.object({})
