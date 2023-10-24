import { RootHeader } from '@components/RootHeader'
import { ButtonBackHome } from '@components/ButtonBackHome'
import { UserDashboard } from '@components/user/UserDashboard'
import styles from './CartLayoutHeader.module.scss'

export function CartLayoutHeader() {
  return (
    <RootHeader>
      <div className={styles.root}>
        <ButtonBackHome />
        <UserDashboard />
      </div>
    </RootHeader>
  )
}
