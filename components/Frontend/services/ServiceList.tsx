import React from 'react'
import ServiceCard from './ServiceCard'
import { ServiceTypes } from '@/types/services'

interface ServiceListProps {
    services: ServiceTypes []
}

function ServiceList({services}: ServiceListProps) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        {services.map((service, i) => (
            <ServiceCard service={service} key={i}/>
        ))}
    </div>
  )
}

export default ServiceList