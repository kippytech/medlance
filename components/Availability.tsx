'use client'

import { useState } from "react"
import { Calendar } from "./ui/calendar"
import Link from "next/link"

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

export default function Availability () {
    const [bookDate, setBookDate] = useState<Date | undefined>(new Date())

    const formattedDate = `${bookDate?.toString().split(" ").slice(0, 4).join(" ")} - GMT${bookDate?.toString().split('GMT')[1].split(" ")[0]}`
    return (
        <div className='mb-'>
            <h2 className='font-bold text-xl uppercase '>Select a Date & Time</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-0">
                <div>
                    <Calendar mode="single" selected={bookDate} onSelect={setBookDate} className="" />
                </div>
                <div>
                    <div className="px-4 flex flex-col gap-4">
                        <h3 className='font-semibold py-2 px-4 text-center border border-blue-600'>{formattedDate}</h3>
                        <div className="grid grid-cols-3 gap-2">
                        {times.slice(0, 5).map((item, i) => (
                            <button className='bg-blue-600 text-slate-300 p-2' key={i}>{item.time}{" "}{item.period}</button>
                            ))}
                            <button className='bg-blue-900 self-center p-2 text-slate-300' >More...</button>
                        </div>                    
                    </div>
                </div>
            </div>
            {/* calendar */}
            {/* Avail times */}
        </div>
    )
}