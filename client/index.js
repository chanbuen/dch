import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import history from './history'


ReactDOM.render(
  <Provider >
    <Router>
      <App />
    </Router>
  </Provider>, 

  document.getElementById('app'))