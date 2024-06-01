'use client'

import React, { useState } from 'react'
import Availability from './Availability'

function DoctorDetails() {
    const [isActive, setIsActive] = useState('availability')
  return (
    <div>
        <div className="flex -mx-4 bg-blue-950">
            <button onClick={() => setIsActive('services')} className={isActive === 'services' ? 'bg-blue-600 text-slate-300 px-4 py-2 w-full' : 'bg-white text-slate-700 border border-blue-600 px-4 py-2 w-full'}>SERVICE DETAILS</button>
            <button onClick={() => setIsActive('availability')} className={isActive === 'availability' ? 'bg-blue-600 text-slate-300 px-4 py-2 w-full' : 'bg-white text-slate-700 border border-blue-600 px-4 py-2 w-full'}>AVAILABILITY</button>
        </div>
        <div className="py-4">
            {isActive === 'availability' ? (
                <div>
                    <Availability />
                </div>
            ) : (
                <div>Service details</div>
            )}
        </div>
    </div>
  )
}

export default DoctorDetails