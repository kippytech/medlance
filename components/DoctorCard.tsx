import { Stethoscope, Video } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const times = [
    {
        time: '8.30',
        period: 'am'
    },
    {
        time: '9.30',
        period: 'am'
    },
    {
        time: '10.30',
        period: 'am'
    },
    {
        time: '11.30',
        period: 'am'
    },
    {
        time: '12.30',
        period: 'pm'
    },
    {
        time: '2.30',
        period: 'pm'
    },
    {
        time: '3.30',
        period: 'pm'
    },
]

function DoctorCard({isInPerson = false}: {isInPerson?: boolean}) {
  return (
    <div className='flex text-slate-700 gap-4 p-4 my-8 rounded-md'>
        <div className="flex flex-col gap-4 border-transparent border-4 rounded-md bg-white p-4 hover:border-slate-400 transition-all ">
            <Link href={`/doctors/slug`}>
                <h3 className='text-lg font-bold uppercase'>Joan Doe</h3>
                {isInPerson && (
                    <p className="">33390 Lincoln Highway, Kendall Park, PAC</p> 
                    )}
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Image className='w-24 h-24 rounded-full object-cover' src={'/doctor.jpeg'} alt='doctor' width={184} height={257} />
                        {!isInPerson && (
                            <div className="absolute bottom-0 right-2 text-blue-900  bg-blue-200 w-8 h-8 flex items-center justify-center rounded-full">
                                <Video className='w-4 h-4' />
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className='flex gap-2 items-center'>
                            <Stethoscope className='mr-2 w-4 h-4 flex-shrink-0' />
                            <p>Mental health</p>
                        </div>
                        <p className="bg-green-600 text-slate-300 py-2 px-4 uppercase text-sm">Available today</p>
                    </div>
                </div>
            </Link>
            <hr />
            <div className=''>
                <div>Tue, May 22 <span className="font-bold"><s>$120</s>{" "}$110</span> with Doctari</div>
                <div className="grid grid-cols-3 gap-2">
                    {times.slice(0, 5).map((item, i) => (
                        <Link className='bg-blue-600 text-slate-300 p-2' href='#' key={i}>{item.time}{" "}{item.period}</Link>
                    ))}
                    <Link className='bg-blue-900 self-center p-2 text-slate-300' href={`/doctors/slug`}>More...</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DoctorCard