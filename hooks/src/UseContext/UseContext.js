import React, { useState, createContext } from 'react'
import Counter from './Counter.js'

export const CountContext = createContext()

export default function UseContext () {

  const [count, setCount] = useState(0)

  return (
    <>
      <h2>useContext</h2>
      <div>You click {count} times</div>
      <button onClick={() => { setCount(count + 1) }}>点击+1</button>
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </>
  )

}
