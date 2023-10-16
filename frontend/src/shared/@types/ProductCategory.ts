export interface ProductCategory {
  id: number
  title: string
  description: string
  imagePath: string | null
  subcategories: never[]
}
