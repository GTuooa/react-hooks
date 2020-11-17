import React, { useState } from 'react'

export default function UseState () {

  const [count, setCount] = useState(0)

  return (
    <>
      <div>You click {count} times</div>
      <button onClick={() => { setCount(count + 1) }}>点击+1</button>
    </>
  )

}
