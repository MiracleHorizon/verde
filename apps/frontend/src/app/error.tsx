'use client'

import { redirect } from 'next/navigation'

import { Route } from '@enums/Route'

export default function ErrorPage() {
  redirect(Route.HOME)
}
