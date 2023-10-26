import Link from 'next/link'
import cn from 'classnames'

import { Route } from '@enums/Route'
import { roboto } from '@styles/fonts.ts'
import styles from './NotFoundMain.module.scss'

export function NotFoundMain() {
  return (
    <div className={styles.root}>
      <article className={styles.titleArticle}>
        <h1 className={cn(styles.title, roboto.className)}>
          404. Страница не найдена
        </h1>
      </article>
      <p className={styles.information}>
        Возможно, она была перемещена, или Вы неверно указали адрес страницы.
      </p>
      <Link href={Route.HOME} className={styles.link}>
        Перейти на главную
      </Link>
    </div>
  )
}
