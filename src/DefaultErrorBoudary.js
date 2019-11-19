import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class DefaultErrorBoudary extends Component {
  state = {
    isError: false
  }
  static getDerivedStateFromError() {
    return { isError: true }
  }
  render() {
    const { isError } = this.state
    const { children } = this.props
    return isError ? <div>Something went wront!</div> : children
  }
}
DefaultErrorBoudary.propTypes = {
  children: PropTypes.node.isRequired
}
