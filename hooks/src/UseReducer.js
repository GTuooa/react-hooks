import React, { useReducer } from 'react'

const initState = {
  color: 'red'
}

function reducer (state, action) {
  switch (action.type) {
    case 'add': return Object.assign({}, state, { color: action.value })
    case 'delete': return Object.assign({}, state, { color: action.value })
    default: return state
  }
}

export default function UseReducer () {

  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <>
      <div className='color'>
        {state.color}
      </div>
      <button onClick={() => dispatch({ type: 'add', value: 'add' })}>add</button>
      <button onClick={() => dispatch({ type: 'delete', value: 'delete' })}>delete</button>
    </>
  )

}
