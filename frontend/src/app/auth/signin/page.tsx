import Link from 'next/link'

import { Route } from '@enums/Route'

export default function SigninPage() {
  return (
    <div>
      <h1>Signin</h1>
      <Link href={Route.HOME}>Home</Link>
    </div>
  )
}
