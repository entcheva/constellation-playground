import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createUser, logInUser } from '../actions/index'

class UserSignUp extends Component {

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const user = {username: this.refs.username.value, email: this.refs.email.value, password: this.refs.password.value, password_confirmation: this.refs.passwordConfirmation.value}
    this.props.createUser(user) // calling the createUser action
  }

  handleLogin(event) {
    event.preventDefault()
    const user = {email: this.refs.logInEmail.value, password: this.refs.logInPassword.value}
    this.props.logInUser(user)
  }

  render() {
    return(
      <div>
        <div>
          <h2>Sign Up</h2>
          <form onSubmit={this.handleSubmit}>
            <label>Username: </label>
            <input ref="username" placeholder="Enter Username" />
            <br/><br/>
            <label>Email: </label>
            <input ref="email" placeholder="Enter Email" />
            <br/><br/>
            <label>Password: </label>
            <input type="password" ref="password" placeholder="Enter Password"/>
            <br/><br/>
            <label>Password Verification: </label>
            <input type="password" ref="passwordConfirmation" placeholder="Verify Password"/>
            <br/><br/>
            <button type="submit">Sign Up</button>
          </form>
          <br/><br/>
        </div>

        <div>
          <h2>Log In</h2>
          <form onSubmit={this.handleLogin}>
            <label>Email: </label>
            <input ref="logInEmail" placeholder="Enter Email" />
            <br/><br/>
            <label>Password: </label>
            <input type="password" ref="logInPassword" placeholder="Enter Password"/>
            <br/><br/>
            <button type="submit">Log In</button>
          </form>
        </div>

      </div>
    )
  }

}



const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createUser, logInUser}, dispatch)
}

export default connect(null, mapDispatchToProps) (UserSignUp)
