import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import './style.css'

const Warning = React.lazy(() => import('./Warning'))
// const a = 'A3'
class App extends Component {
  state = {
    count: 0
  }

  render() {
    // throw new Error('boom')
    return (
      <div>
        <h1 className={this.state.count > 10 ? 'warning' : null}>
          Hellow from react
        </h1>
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}
        >
          +
        </button>
        <button
          onClick={() => this.setState(state => ({ count: state.count - 1 }))}
        >
          -
        </button>
        {this.state.count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    )
  }
}

export default hot(module)(App)
