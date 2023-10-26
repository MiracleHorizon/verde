import { RootHeader } from '@components/RootHeader'
import { LayoutHeaderLeft } from './LayoutHeaderLeft'
import { LayoutHeaderRight } from './LayoutHeaderRight'

export function LayoutHeader() {
  return (
    <RootHeader>
      <>
        <LayoutHeaderLeft />
        <LayoutHeaderRight />
      </>
    </RootHeader>
  )
}
