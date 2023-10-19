import type { Product } from './Product'

export interface ProductSubcategory {
  id: number
  categoryId: number
  categoryTitle: string
  title: string
  description: string
  products: Product[]
}
