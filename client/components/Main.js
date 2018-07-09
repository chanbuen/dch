import React, { Component } from 'react'
import Navbar from './Navbar'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      initialRequestHasCompleted : false //change back to true when add component
    }
  }
  render() {
    if (!this.state.initialRequestHasCompleted) return (null);
    return (
      <Navbar />
    )
  }
}