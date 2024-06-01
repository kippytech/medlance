import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function LinkCard({className}: {className?: string}) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        <Link href='#' className={`flex gap-4 bg-slate-800 hover:bg-slate-700 transition-all rounded-md p-2 items-center justify-center ${className}`}>
            <h2>Anxiety</h2>
            <ArrowRight />
        </Link>
        <Link href='#' className={`flex gap-4 bg-slate-800 hover:bg-slate-700 transition-all rounded-md p-2 items-center justify-center ${className}`}>
            <h2>Anxiety</h2>
            <ArrowRight />
        </Link>
        <Link href='#' className={`flex gap-4 bg-slate-800 hover:bg-slate-700 transition-all rounded-md p-2 items-center justify-center ${className}`}>
            <h2>Anxiety</h2>
            <ArrowRight />
        </Link>
        <Link href='#' className={`flex gap-4 bg-slate-800 hover:bg-slate-700 transition-all rounded-md p-2 items-center justify-center ${className}`}>
            <h2>Anxiety</h2>
            <ArrowRight />
        </Link>
        <Link href='#' className={`flex gap-4 bg-slate-800 hover:bg-slate-700 transition-all rounded-md p-2 items-center justify-center ${className}`}>
            <h2>Anxiety</h2>
            <ArrowRight />
        </Link>
        <Link href='#' className={`flex gap-4 bg-slate-800 hover:bg-slate-700 transition-all rounded-md p-2 items-center justify-center ${className}`}>
            <h2>Anxiety</h2>
            <ArrowRight />
        </Link>
    </div>
  )
}

export default LinkCard