'use client'

import { redirect } from 'next/navigation'

import { Route } from '@shared/@types/Route'

export default function ErrorPage() {
  redirect(Route.HOME)
}
