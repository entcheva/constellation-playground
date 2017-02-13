import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createUser } from '../actions/index'

class UserSignUp extends Component {

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const user = {email: this.refs.email.value, password: this.refs.password.value, password_confirmation: this.refs.passwordConfirmation.value}
    this.props.createUser(user)
  }

  render() {
    return(
      <div>
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
      </div>
    )
  }

}



const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createUser}, dispatch)
}

export default connect(null, mapDispatchToProps) (UserSignUp)
