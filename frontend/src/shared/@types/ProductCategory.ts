import type { ProductSubcategory } from './ProductSubcategory.ts'

export interface ProductCategory {
  id: number
  title: string
  description: string
  imagePath: string | null
  subcategories: ProductSubcategory[]
}
