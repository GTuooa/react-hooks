import React, { useState } from 'react'
import { useHistory, Route, Link } from 'react-router-dom'



export default function UseState (props) {

  const [count, setCount] = useState(0)
  const history = useHistory()
  console.log(history)
  console.log(props)

  return (
    <>
      <ul>
        <li><Link to='/use-state/about'>useState简介</Link></li>
        <li><Link to='/use-state/overview'>useState概览</Link></li>
        <li><Link to='/use-state/use'>useState使用</Link></li>
      </ul>
      <hr></hr>

      <Route path='/use-state/about' component={About} />
      <Route path='/use-state/overview' component={Overview} />
      <Route path='/use-state/use' component={Use} />


      <hr></hr>
      <h2>useState</h2>
      <div>You click {count} times</div>
      <button onClick={() => { setCount(count + 1) }}>点击+1</button>
      <div onClick={() => history.push('/')}>history</div>
    </>
  )

}

function About () {
  return (
    <h2>我是useState简介页面</h2>
  )
}

function Overview () {
  return (
    <h2>我是useState概览页面</h2>
  )
}

function Use () {
  return (
    <h2>我是useState使用页面</h2>
  )
}
