import { Fragment } from 'react'
import cn from 'classnames'

import { BreadcrumbItem } from './BreadcrumbItem'
import type { Props } from './Breadcrumb.types.ts'
import styles from './Breadcrumb.module.scss'

const DEFAULT_SEPARATOR = '/'

export function Breadcrumb({
  items,
  customSeparator,
  withFinishingSeparator,
  className
}: Props) {
  return (
    <section className={cn(styles.root, className)}>
      {items.map((item, index) => (
        <Fragment key={item.href}>
          <BreadcrumbItem {...item} />
          {(withFinishingSeparator || index !== items.length - 1) && (
            <div className={styles.separator}>
              {customSeparator || DEFAULT_SEPARATOR}
            </div>
          )}
        </Fragment>
      ))}
    </section>
  )
}
