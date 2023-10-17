import type { Product } from './Product.ts'

export interface ProductSubcategory {
  id: number
  categoryId: number
  categoryTitle: string
  title: string
  description: string
  products: Product[]
}
