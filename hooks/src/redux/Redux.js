import React, { useReducer, createContext } from 'react'
import Children from './childen.js'

const initState = {
  color: 'balck'
}

function reducer (state, action) {
  switch (action.type) {
    case 'update': return Object.assign({}, state, { color: action.value })
    default: return state
  }
}

export const ColorContext = createContext({})

export default function UseReducer () {

  const [state, dispatch] = useReducer(reducer, initState)
  console.log('state', state)
  return (
    <>
      <div style={{ color: state.color }}>
        字体颜色为{state.color}
      </div>
      <ColorContext.Provider value={state}>
        <Children></Children>
      </ColorContext.Provider>

      <button onClick={() => dispatch({ type: 'update', value: 'black' })}>black</button>
      <button onClick={() => dispatch({ type: 'update', value: 'pink' })}>pink</button>
      <button onClick={() => dispatch({ type: 'update', value: 'red' })}>red</button>
    </>
  )

}
