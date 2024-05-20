'use client'

import React, { useEffect, useState } from 'react'
import TextTransition, {presets} from 'react-text-transition'

//const TEXTS = ['forest', 'buidling', 'trees']

function TransitionText({TEXTS}: {TEXTS: string[]}) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1), 3000
      )
    
      return () => {
        clearTimeout(intervalId)
      }
    }, [])
    
  return (
    <span className='text-blue-500'>
        <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
    </span>
  )
}

export default TransitionText