import React, { Component } from 'react';
import { connect } from 'react-redux'

class Sky extends Component {

  render() {
    return (
      <div className="Sky">
        <p>You are on the sky page.</p>
        <h1>
          Welcome {this.props.username}
        </h1>
      </div>
    );
  }
}

function mapStateToProps (state){
  return {
    username: state.user.username
    // The global state is {user: {username: 'stardude'}}
  }
}

export default connect(mapStateToProps, null)(Sky)
