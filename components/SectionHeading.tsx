import React from 'react'

function SectionHeading({title}: {title: string}) {
  return (
    <h2 className='mb-4 text-3xl font-bold leading-[1.2] sm:text-4xl md:text-[40px]'>{title}</h2>
  )
}

export default SectionHeading