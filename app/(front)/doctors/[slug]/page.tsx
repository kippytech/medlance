import DoctorDetails from '@/components/DoctorDetails'
import FixedBookedBtn from '@/components/FixedBookedBtn'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function DoctorsPage() {
  return (
    <div className='mt-4 md:mt-8'>
        <div className="bg-white text-slate-700 border border-gray-200 mx-auto max-w-3xl shadow-md rounded-md p-4">
            <div className="space-y-8">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <h3 className="text-3xl font-bold">Joan Doe</h3>
                        <div className="text-muted-foreground">Mental health</div>
                        <div className="py-4">
                            <div className="text-lg">In-person doctor visit</div>
                            <div className="text-muted-foreground">33390 Lincoln Highway, Kendall Park, PAC</div>
                        </div>
                    </div>
                    <Image className='w-32 h-32 rounded-full object-cover' src={'/doctor.jpeg'} alt='doctor' width={184} height={257} />
                </div>
                <DoctorDetails />
            </div>
        </div>
        <FixedBookedBtn />
    </div>
  )
}

export default DoctorsPage