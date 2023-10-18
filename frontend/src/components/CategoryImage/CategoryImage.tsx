import { memo, useMemo } from 'react'

import type { ProductCategory } from '@shared/@types/ProductCategory.ts'
import styles from './CategoryImage.module.scss'

function CategoryImage({ imagePath }: Pick<ProductCategory, 'imagePath'>) {
  const imageStyle = useMemo(() => {
    if (!imagePath) return

    return {
      backgroundImage: `url("${imagePath}")`
    }
  }, [imagePath])

  return (
    <div
      style={imageStyle}
      className={imagePath ? styles.image : styles.imageFallback}
    />
  )
}

const MemoizedCategoryImage = memo(CategoryImage)

export { MemoizedCategoryImage as CategoryImage }
