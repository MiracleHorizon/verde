'use client'

import { memo } from 'react'
import Image from 'next/image'
import { useIsClient } from 'usehooks-ts'
import cn from 'classnames'

import { useFullSizeImageLoad } from '@hooks/useFullSizeImageLoad'
import type { ProductCategory } from '@interfaces/ProductCategory'
import type { ClassNameProps } from '@interfaces/ClassNameProps'
import styles from './CategoryImage.module.scss'

function CategoryImage({ imagePath, className }: Props) {
  const isClient = useIsClient()

  const { style, handleImageOnLoad } = useFullSizeImageLoad()

  return (
    <div className={cn(styles.root, className)}>
      {isClient && imagePath ? (
        <Image
          src={imagePath}
          alt='Категория'
          sizes='100%'
          fill
          className={styles.image}
          style={style}
          onLoad={handleImageOnLoad}
        />
      ) : (
        <div className={styles.imageFallback} />
      )}
    </div>
  )
}

const MemoizedCategoryImage = memo(CategoryImage)

export { MemoizedCategoryImage as CategoryImage }

type Props = Pick<ProductCategory, 'imagePath'> & ClassNameProps
