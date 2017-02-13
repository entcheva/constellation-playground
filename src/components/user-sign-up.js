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
          <input ref="username" placeholder="Enter Username" />
          <input ref="email" placeholder="Enter Email" />
          <input type="password" ref="password" placeholder="Enter Password"/>
          <input type="password" ref="passwordConfirmation" placeholder="Verify Password"/>
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
