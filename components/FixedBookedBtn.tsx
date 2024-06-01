import React from 'react'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'

function FixedBookedBtn() {
  return (
    <div className="sticky mt-8 bottom-0 w-full shadow-2xl py-8 px-4 rounded-md flex justify-between max-w-3xl mx-auto bg-white text-slate-700">
            <div>
                <p className='text-xl font-bold'>$45</p>
                <p className='text-sm font-semibold'>Tue, May 22 - 8:00 AM GMT+3</p>
            </div>
            <Button className='bg-blue-600 text-slate-300 hover:bg-blue-500'>
                <Plus className='mr-2' />
                BOOK
            </Button>
    </div>
  )
}

export default FixedBookedBtn