import React, { Component } from 'react'

export default class Navbar extends Component {
  constructor() {
    super()
  }

  render(){
    return (
      <ul>
        <li>Login</li>
        <li>Create Account</li>
      </ul>
    )
  }
}