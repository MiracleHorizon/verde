import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

import { Button } from '@ui/Button'
import { Route } from '@enums/Route'
import { roboto } from '@styles/fonts'
import emptyCartBagPng from '@public/empty_cart_bag.png'
import styles from './EmptyCart.module.scss'

export function EmptyCart() {
  return (
    <div className={styles.root}>
      <main className={styles.content}>
        <div className={styles.imageContainer}>
          <Image priority src={emptyCartBagPng} alt='Пусто' sizes='100%' fill />
        </div>
        <article className={styles.titleArticle}>
          <h1 className={cn(styles.title, roboto.className)}>
            В вашей корзине пока пусто
          </h1>
        </article>
        <p className={styles.information}>
          Тут появятся товары, которые вы добавите в корзину.
        </p>
        <Link href={Route.HOME} className={styles.link}>
          <Button variant='primary' title='Перейти на главную' />
        </Link>
      </main>
    </div>
  )
}
