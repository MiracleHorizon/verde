export type Props = ItemWithLink | ItemWithClick

interface CommonItem {
  title: string
  onClickRoot?: VoidFunction
}

interface ItemWithLink extends CommonItem {
  href: string
  onClick?: never
}

interface ItemWithClick extends CommonItem {
  onClick: VoidFunction
  href?: never
}
