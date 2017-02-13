import React, { Component } from 'react'


export default class UserSignUp extends Component {

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const user = {email: this.refs.email.value, password: this.refs.password.value, password_confirmation: this.refs.passwordConfirmation.value}
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="email" placeholder="Enter Email" />
          <input type="password" ref="password" placeholder="Enter Password"/>
          <input type="password" ref="passwordConfirmation" placeholder="Verify Password"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }


}
