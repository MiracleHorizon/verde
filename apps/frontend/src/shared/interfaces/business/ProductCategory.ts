import type { ProductSubcategory } from './ProductSubcategory'

export interface ProductCategory {
  id: string
  title: string
  description: string
  imagePath: string | null
  subcategories: ProductSubcategory[]
}
