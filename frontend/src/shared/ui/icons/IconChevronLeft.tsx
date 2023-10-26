import type { ClassNameProps } from '@interfaces/ClassNameProps'

export function IconChevronLeft(props: ClassNameProps) {
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
        d='M15.75 19.5L8.25 12l7.5-7.5'
      />
    </svg>
  )
}
