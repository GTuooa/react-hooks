import React, { useRef, useEffect } from 'react'

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
