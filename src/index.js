import React from 'react'

import ReactDOM from 'react-dom'
import '@babel/polyfill'
import DefaultErrorBoudary from './DefaultErrorBoudary'
import App from './App'

ReactDOM.render(
  <DefaultErrorBoudary>
    <App />
  </DefaultErrorBoudary>,

  document.getElementById('app')
)
