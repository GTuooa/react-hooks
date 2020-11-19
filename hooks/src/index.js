import React from 'react'
import ReactDOM from 'react-dom'
import UseState from './UseState.js'
import UseContext from './UseContext/UseContext.js'
import UseRef from './UseRef'
import UseReducer from './UseReducer'
import Redux from './redux/Redux.js'



ReactDOM.render(
  <React.StrictMode>
    {/* <UseState /> */}
    {/* <UseContext /> */}
    {/* <UseRef /> */}
    {/* <UseReducer /> */}
    <Redux></Redux>
  </React.StrictMode>,
  document.getElementById('root')
)
