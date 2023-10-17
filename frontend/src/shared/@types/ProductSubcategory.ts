import type { Product } from './Product.ts'

export interface ProductSubcategory {
  id: number
  title: string
  description: string
  products: Product[]
}
