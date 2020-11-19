import React, { useContext } from 'react'
import { ColorContext } from './Redux.js'

export default function GetColor () {
  const state = useContext(ColorContext)
  console.log(state)

}