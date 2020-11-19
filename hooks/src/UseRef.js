import React, { useRef, useEffect } from 'react'
import './index.css'

export default function UseRef () {

  const divRef = useRef()
  useEffect(() => {
    console.log(divRef.current)
  }, [])

  return (
    <>
      <div ref={divRef} className='color' >You click times</div>
    </>
  )

}
