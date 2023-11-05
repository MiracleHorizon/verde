import type { ClassNameProps } from '@interfaces/ClassNameProps'

export function IconChevronDoubleUp(props: ClassNameProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5'
      />
    </svg>
  )
}
