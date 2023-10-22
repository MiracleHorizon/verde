import { NavigationItem } from './NavigationItem'
import type { NavigationCategory } from '@interfaces/NavigationCategory'
import styles from './Navigation.module.scss'

export function Navigation() {
  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        {navigationCategories.map(category => (
          <NavigationItem key={category.id} {...category} />
        ))}
      </ul>
    </nav>
  )
}

const navigationCategories: NavigationCategory[] = [
  {
    id: 'clo0h4c79000f08l9590rcprw',
    title: 'Овощи и зелень',
    imagePath:
      'https://eda.yandex/images/3337779/d10c74a161cd75522451f98aed228103-200x200.png'
  },
  {
    id: 'clo0hb77b000g08l9htdg9lt3',
    title: 'Фрукты и ягоды',
    imagePath:
      'https://eda.yandex/images/3547279/05e200f266ba0997e5fdc974c8b5f8fc-200x200.png'
  },
  {
    id: 'clo10v9pe000008l99w8j5shy',
    title: 'Рыба и морепродукты',
    imagePath:
      'https://eda.yandex/images/3806466/99d8d96912b57876bbae4791321df8a6-200x200.png'
  },
  {
    id: 'clo10yjti000608l99gzch9kx',
    title: 'Мясо и птица',
    imagePath:
      'https://eda.yandex/images/3595156/0ead531a3e5b76f0398edd90db36f710-200x200.png'
  },
  {
    id: 'clo111s0u000a08l9hbcs0btf',
    title: 'Супы',
    imagePath:
      'https://eda.yandex/images/3559865/cd4fab0baf9b76ca19d0b4f1d1cd5069-200x200.png'
  },
  {
    id: 'clo1157qd000d08l9cdhn21w6',
    title: 'Салаты и закуски',
    imagePath:
      'https://eda.yandex/images/3749380/37db379d95863af224949a99cc5e6482-200x200.png'
  },
  {
    id: 'clo116xek000g08l90tfqfmlp',
    title: 'Хлеб и выпечка',
    imagePath:
      'https://eda.yandex/images/3541746/40585a49e70d7c9f4bae4083d937fc11-200x200.png'
  },
  {
    id: 'clo11a7ft000l08l9eif06v4c',
    title: 'Завтраки',
    imagePath:
      'https://eda.yandex/images/2750126/b450332cc152c7356fe191d452ba57b9-200x200.png'
  },
  {
    id: 'clo11e9nd000o08l99c4me74e',
    title: 'Вода и напитки',
    imagePath:
      'https://eda.yandex/images/3772784/2c36bfe0020a7d30ead70a43ddaf6da2-200x200.png'
  },
  {
    id: 'clo11hd5y000s08l9cfz761tl',
    title: 'Молоко и яйца',
    imagePath:
      'https://eda.yandex/images/3513074/c4026e3b49b8acc8802359ab634f97cb-200x200.png'
  }
]
