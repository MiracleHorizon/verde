import { Button } from '@ui/Button'
import { useDemoSignup } from '@hooks/auth/useDemoSignup'
import type { ClassNameProps } from '@interfaces/ClassNameProps'

export function ButtonDemoAuth(props: ClassNameProps) {
  const { handleDemoSignup } = useDemoSignup()

  return (
    <Button
      variant='primary'
      title='Демонстрация'
      onClick={handleDemoSignup}
      {...props}
    />
  )
}
