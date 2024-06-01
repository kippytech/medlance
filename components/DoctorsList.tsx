import React from 'react'
import SectionHeading from './SectionHeading'
import Link from 'next/link'
import DoctorCard from './DoctorCard'
import { Map, ToggleRight } from 'lucide-react'
import DocsListCarousel from './DocsListCarousel'

const doctors = [
    {
        name: 'Jane'
    },
    {
        name: 'Jane'
    },
    {
        name: 'Jane'
    },
    {
        name: 'Jane'
    },
    {
        name: 'Jane'
    },
    {
        name: 'Jane'
    },
    {
        name: 'Jane'
    },
]

function DoctorsList({title, isInPerson}: {title: string, isInPerson?: boolean}) {
  return (
    <div className='max-w-6xl mx-auto text-slate-300'>
        <SectionHeading title={title} />
        <div className="flex items-center justify-between">
            {isInPerson ? (
                <Link href='' className='text-blue-600 font-semibold flex item-center text-sm gap-2'>
                    <Map className='w-4 h-4' />
                    <span className="">View Map</span>
                </Link>
            ) : (
                <ToggleRight />
            )}
            <Link href='#' className='py-2 px-4 border border-blue-600 hover:border-blue-500'>SEE ALL</Link>
        </div>
        <DocsListCarousel doctors={doctors} isInPerson={isInPerson} />
    </div>
  )
}

export default DoctorsList