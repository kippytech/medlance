import OnboardingSteps from '@/components/Onboarding/OnboardingSteps'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'
import React from 'react'

async function OnboardingPage() {
    const session = await getServerSession(authOptions)

    const user = session?.user

    if (!user) {
        return notFound()
    }
  return (
    <div className='p-8 max-w-5xl mx-auto'>
        <OnboardingSteps />
    </div>
  )
}

export default OnboardingPage