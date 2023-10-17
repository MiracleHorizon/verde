import { Breadcrumb, type BreadcrumbItem } from '@ui/Breadcrumb'
import styles from './Header.module.scss'

export function Header({ title, breadcrumbItems }: Props) {
  return (
    <header className={styles.root}>
      <Breadcrumb
        items={breadcrumbItems}
        className={styles.breadcrumb}
        withFinishingSeparator
      />
      <article className={styles.titleArticle}>
        <h1 className={styles.title}>{title}</h1>
      </article>
    </header>
  )
}

interface Props {
  title: string
  breadcrumbItems: BreadcrumbItem[]
}
