import { NavigationItem } from './NavigationItem'
import type { NavigationCategory } from '@shared/@types/NavigationCategory.ts'
import styles from './Navigation.module.scss'

const categories: NavigationCategory[] = [
  {
    id: 1,
    title: 'Цветы',
    imagePath: null
  },
  {
    id: 2,
    title: 'Деревья',
    imagePath:
      'https://eda.yandex/images/3337779/d10c74a161cd75522451f98aed228103-200x200.png'
  }
]

export function Navigation() {
  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        {categories.map(category => (
          <NavigationItem key={category.id} {...category} />
        ))}
      </ul>
    </nav>
  )
}
