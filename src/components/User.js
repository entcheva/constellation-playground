import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createUser, logInUser } from '../actions/index'

class User extends Component {

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const user = {username: this.refs.username.value, email: this.refs.email.value, password: this.refs.password.value, password_confirmation: this.refs.passwordConfirmation.value}
    this.props.createUser(user)
  }

  handleLogin(event) {
    event.preventDefault()
    const user = {email: this.refs.logInEmail.value, password: this.refs.logInPassword.value}
    this.props.logInUser(user)
  }

  render() {

    return(

      <div>

        <div id="styleOnly">
          <h1 id="title">✨ Constellation Playground ✨</h1>

          <div id="signUp">
            <h2 className="formH2">Sign Up</h2>
            <form onSubmit={this.handleSubmit} >
              <label>Username: </label>
              <input ref="username" placeholder="Enter Username" />
              <br/><br/>
              <label>Email: </label>
              <input ref="email" placeholder="Enter Email" />
              <br/><br/>
              <label>Password: </label>
              <input type="password" ref="password" placeholder="Enter Password"/>
              <br/><br/>
              <label>Confirm Password: </label>
              <input type="password" ref="passwordConfirmation" placeholder="Confirm Password"/>
              <br/><br/>
              <button type="submit">Sign Up</button>
            </form>
            <br/><br/>
          </div>

          <div id="logIn">
            <h2 className="formH2">Log In</h2>
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

      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createUser, logInUser}, dispatch)
}

export default connect(null, mapDispatchToProps) (User)
