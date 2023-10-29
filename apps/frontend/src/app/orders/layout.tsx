import type { PropsWithChildren } from 'react'

import { DefaultLayout } from '@components/Layout'

export default function OrdersLayout({ children }: PropsWithChildren) {
  return <DefaultLayout withoutNavigation>{children}</DefaultLayout>
}
