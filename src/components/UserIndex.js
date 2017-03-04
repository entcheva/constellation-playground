import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import { getUsers, showUser, displayUser } from '../actions'

class UserIndex extends Component {

  componentDidMount(){
    this.props.getUsers()
  }

  handleClick(user, e){
    this.props.showUser(user.id)
    this.props.displayUser(user)
    browserHistory.push('/show')
  }

  render() {

    return(
      <div id="styleOnly">
        <h1 id="title">Constellation Community</h1>
        <div id="columns">
          {this.props.listUsers.map( (user, i) =>
            <div className="usernameDiv" key={i}>
              <a className="username" onClick={this.handleClick.bind(this, user)}>{user.username}</a>
            </div>
          )}
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    listUsers: state.listUsers
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getUsers, showUser, displayUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex)
