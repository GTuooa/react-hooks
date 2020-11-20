import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import UseState from './UseState.js'
import UseContext from './UseContext/UseContext.js'
import UseRef from './UseRef'
import UseReducer from './UseReducer'
import Redux from './redux/Redux.js'
import './index.css'

function Index () {
  return <h1>hooks</h1>
}

export default function AppRoouter () {
  const routerList = [
    { path: '/', title: '首页', Element: Index },
    { path: '/use-state', title: 'useState', Element: UseState },
    { path: '/use-context', title: 'useContext', Element: UseContext },
    { path: '/use-ref', title: 'useRef', Element: UseRef },
    { path: '/use-reducer', title: 'useReducer', Element: UseReducer },
    { path: '/redux', title: 'redux', Element: Redux },

  ]
  return (
    <Router>
      <div className='home'>
        <ul className='left'>
          {routerList.map((v, i) => {
            return (
              <li key={i}>
                <Link to={v['title'] === 'useState' ? `${v['path']}/1216` : v['path']}>
                  {v['title']}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className='right'>
          {routerList.map((v, i) => {
            return (
              <Route
                key={i}
                path={v['title'] === 'useState' ? `${v['path']}/:id` : v['path']}
                exact={v['path'] === '/' ? true : false}
                component={v['Element']}
              />
            )
          })}
        </div>
      </div>
    </Router>

  )

}