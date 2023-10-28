import { memo, useMemo } from 'react'
import cn from 'classnames'

import type { ProductCategory } from '@interfaces/ProductCategory'
import type { ClassNameProps } from '@interfaces/ClassNameProps'
import styles from './CategoryImage.module.scss'

function CategoryImage({ imagePath, className }: Props) {
  const imageStyle = useMemo(() => {
    if (!imagePath) return

    return {
      backgroundImage: `url("${imagePath}")`
    }
  }, [imagePath])

  return (
    <div
      style={imageStyle}
      className={cn(imagePath ? styles.image : styles.imageFallback, className)}
    />
  )
}

const MemoizedCategoryImage = memo(CategoryImage)

export { MemoizedCategoryImage as CategoryImage }

type Props = Pick<ProductCategory, 'imagePath'> & ClassNameProps