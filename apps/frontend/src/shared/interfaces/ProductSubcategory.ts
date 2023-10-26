import type { Product } from './Product'

export interface ProductSubcategory {
  id: string
  categoryId: string
  categoryTitle: string
  title: string
  description: string
  products: Product[]
}
