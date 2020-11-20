import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


export default function UseState (props) {

  const [count, setCount] = useState(0)
  const history = useHistory()
  console.log(history)
  console.log(props)

  return (
    <>
      <h2>useState</h2>
      <div>You click {count} times</div>
      <button onClick={() => { setCount(count + 1) }}>点击+1</button>
      <div onClick={() => history.push('/')}>history</div>
    </>
  )

}
