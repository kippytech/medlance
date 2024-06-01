import { ServiceTypes } from '@/types/services'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
//import {Image} from 'next/image'

interface ServiceListProps {
    service: ServiceTypes 
}

export default function ServiceCard({service}: ServiceListProps) {
    return (
        <Link href={`/services/${service.slug}`} className='rounded-md bg-slate-800 hover:bg-slate-700 transition-all flex gap-4'>
            <Image alt={service.title} src={service.image} width={181} height={181} className='object-cover aspect-video w-1/3' />
            <div className="flex flex-col w-2/3">
                <h3>{service.title}</h3>
                {/* <div>1136 doctors available</div> */}
                <ArrowRight />
            </div>
        </Link>
    )
}