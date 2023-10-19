import type { ClassNameProps } from '@shared/@types/ClassNameProps.ts'

export function IconMinus(props: ClassNameProps) {
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
      <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 12h-15' />
    </svg>
  )
}
