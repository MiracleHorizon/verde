import type { PropsWithChildren } from 'react'

import { DefaultLayout } from '@components/Layout'

export default function CategoryLayout({ children }: PropsWithChildren) {
  return <DefaultLayout>{children}</DefaultLayout>
}
