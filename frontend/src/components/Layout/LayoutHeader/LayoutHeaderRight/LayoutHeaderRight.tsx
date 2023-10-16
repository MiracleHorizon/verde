import { HamburgerMenu } from '@ui/HamburgerMenu'
import { breakpoints } from '@styles/breakpoints.ts'
import styles from './LayoutHeaderRight.module.scss'

const hamburgerMenuProps = {
  className: styles.hamburgerMenu,
  viewportMaxWidth: {
    maxWidth: breakpoints.tablet
  }
}

export function LayoutHeaderRight() {
  return (
    <div className={styles.root}>
      <HamburgerMenu {...hamburgerMenuProps}>
        <div></div>
      </HamburgerMenu>
    </div>
  )
}
