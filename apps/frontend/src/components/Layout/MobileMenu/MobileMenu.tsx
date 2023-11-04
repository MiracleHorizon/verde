import { MobileMenuItem } from './MobileMenuItem'
import { Route } from '@enums/Route'
import homeSvg from '@public/svg/home.svg'
import listSvg from '@public/svg/list.svg'
import cartSvg from '@public/svg/cart.svg'
import styles from './MobileMenu.module.scss'

const items = [
  {
    href: Route.HOME,
    title: 'Главная',
    imagePath: homeSvg.src
  },
  {
    href: Route.ORDERS,
    title: 'Заказы',
    imagePath: listSvg.src
  },
  {
    href: Route.CART,
    title: 'Корзина',
    imagePath: cartSvg.src
  }
]

export function MobileMenu() {
  return (
    <menu className={styles.root}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {items.map(item => (
            <MobileMenuItem key={item.href} {...item} />
          ))}
        </ul>
      </nav>
    </menu>
  )
}
