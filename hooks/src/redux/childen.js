import React, { useContext } from 'react'
import { ColorContext } from './Redux.js'

export default function Children () {
  const state = useContext(ColorContext)
  console.log(state)
  return (
    <>
      <div>Children组件的颜色为{state.color}</div>
    </>
  )
}