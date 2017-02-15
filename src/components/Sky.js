import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logOutUser, fetchUsername } from '../actions/index'


class Sky extends Component {

  handleClick() {
    // bring us to that Log Out action
    this.props.logOutUser()
  }

  componentDidMount(){
    this.props.fetchUsername()
  }

  render() {
    return (
      <div className="Sky">
        <p>You are on the sky page.</p>
        <h1>
          Welcome {this.props.username}
        </h1>
        <button onClick={this.handleClick.bind(this)}>Log Out</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({logOutUser, fetchUsername}, dispatch)
}

function mapStateToProps (state){
  return {
    username: state.user.username
    // The global state is {user: {username: 'stardude'}}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sky)
