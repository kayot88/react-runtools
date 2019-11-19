import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import DefaultErrorBoudary from './DefaultErrorBoudary'
import App from './App'

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <DefaultErrorBoudary>
    <App />
  </DefaultErrorBoudary>,

  document.getElementById('app')
)
