'use client'

import { useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useIsClient } from 'usehooks-ts'
import cn from 'classnames'

import { IconPlus } from '@ui/icons/IconPlus'
import { CounterChanger } from '@ui/CounterChanger'
import { useUserStore } from '@stores/user'
import { useCartStore } from '@stores/cart'
import { MAX_PRODUCT_COUNT } from '@constants/mock'
import { getSigninRedirectURL } from '@helpers/getSigninRedirectURL'
import { getVariantStyles, type Props } from '@components/ProductCard'
import { Route } from '@enums/Route'
import styles from './ProductCardFooterContent.module.scss'

export default function ProductCardFooterContent({
  variant,
  ...product
}: Omit<Props, 'className'>) {
  const router = useRouter()
  const pathname = usePathname()
  const isClient = useIsClient()

  const isAuth = useUserStore(state => state.isAuth())
  const inCart = useCartStore(state => state.isProductInCart(product.id))
  const count = useCartStore(state => state.productCount(product.id))

  const addProduct = useCartStore(state => state.addProduct)
  const increment = useCartStore(state => state.incrementProductCount)
  const decrement = useCartStore(state => state.decrementProductCount)

  const handleAddProduct = useCallback(() => {
    if (isAuth) {
      return addProduct(product)
    }

    if (pathname === Route.HOME) {
      return router.push(Route.SIGNIN)
    }

    const signinRedirectURL = getSigninRedirectURL()

    if (!signinRedirectURL) {
      return router.push(Route.SIGNIN)
    }

    router.push(signinRedirectURL)
  }, [product, isAuth, addProduct, router, pathname])

  const handleIncrement = () => increment(product.id)
  const handleDecrement = () => decrement(product.id)

  if (!isClient || !inCart) {
    return (
      <button className={styles.buttonAdd} onClick={handleAddProduct}>
        <IconPlus className={getVariantStyles(styles, variant, 'icon')} />
      </button>
    )
  }

  return (
    <CounterChanger
      variant='solid'
      count={count}
      increment={handleIncrement}
      decrement={handleDecrement}
      isIncrementDisabled={count >= MAX_PRODUCT_COUNT}
      isDecrementDisabled={count <= 0}
      className={cn(
        styles.counterChanger,
        getVariantStyles(styles, variant, 'counterChanger')
      )}
    />
  )
}
