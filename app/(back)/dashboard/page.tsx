import { getCurrentUser } from '@/actions/getCurrentUser'
import Dashboard from '@/components/Dashboard/Dashboard'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'
import React from 'react'

async function Page() {
  const user = await getCurrentUser()

  if (!user) {
    return notFound()
  }
  return (
    <Dashboard />
  )
}

export default Page