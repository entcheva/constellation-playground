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

    var style = {
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer'
    }

    return(
      <div className="UserView">
        <h1 style={style}>Users</h1>
        {this.props.listUsers.map( (user, i) =>
          <div style={style} key={i}>
            <a style={style} onClick={this.handleClick.bind(this, user)}>{user.username}</a>
          </div>
        )}
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
