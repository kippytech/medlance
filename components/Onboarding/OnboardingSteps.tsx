'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import Biodata from './Biodata'
import Availability from './Availability'
import Practice from './Practice'
import License from './License'
import Education from './Education'
import { SessionProvider } from 'next-auth/react'

const steps = [
    {
        title: 'Bio Data',
        page: 'biodata',
        component: <Biodata />,
    },
    {
        title: 'Contacts',
        page: 'contacts',
        component: <Biodata />,
    },
    {
        title: 'Education',
        page: 'education',
        component: <Education />,
    },
    {
        title: 'License',
        page: 'license',
        component: <License />,
    },
    {
        title: 'Practice',
        page: 'practice',
        component: <Practice />,
    },
    {
        title: 'Availability',
        page: 'availability',
        component: <Availability />,
    },
]

function OnboardingSteps() {
    const params = useSearchParams()
    const page = params.get('page')
    //console.log('page>>', page)

    const currentPage = steps.find((step) => step.page === page)
  return (
    <div className='grid grid-cols-12 rounded-lg overflow-hidden border border-slate-200 bg-card min-h-screen'>
        <div className='col-span-full md:col-span-2 divide-y-2 divide-slate-200 uppercase text-sm font-semibold'>
            { steps.map((step, i) => (
                <Link key={i} href={`/onboarding?page=${step.page}`} className={cn('block py-3 px-4 bg-slate-300 text-slate-800 shadow-inner', step.page === page && 'bg-green-500 text-slate-100')}>{step.title}</Link>
            ))}            
        </div>
        <div className="col-span-full md:col-span-10 text-slate-700 p-4">
            <SessionProvider>{ currentPage?.component}</SessionProvider>
        </div>
    </div>
  )
}

export default OnboardingSteps