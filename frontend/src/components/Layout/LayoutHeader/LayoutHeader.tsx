import { RootHeader } from '@components/RootHeader'
import { LayoutHeaderLeft } from './LayoutHeaderLeft'

export function LayoutHeader() {
  return (
    <RootHeader>
      <>
        <LayoutHeaderLeft />
        <div />
      </>
    </RootHeader>
  )
}
