import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logOutUser, fetchUsername, fetchStars } from '../actions/index'


class Sky extends Component {

  handleClick() {
    // bring us to that Log Out action
    this.props.logOutUser()
  }

  componentDidMount(){
    this.props.fetchUsername()
    this.props.fetchStars()
  }

  render() {
    console.log(this.props.stars)
    return (
      <div className="Sky">
        <p>You are on the sky page.</p>
        <h1>
          Welcome {this.props.username}
        </h1>
        <ul>
          { this.props.stars.map((star, i) =>
            <li key={i} >
              Star ID: {star.id} X: {star.x} Y: {star.y} Z: {star.z}
            </li>
          ) }
        </ul>
        <button onClick={this.handleClick.bind(this)}>Log Out</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({logOutUser, fetchUsername, fetchStars}, dispatch)
}

function mapStateToProps (state){
  return {
    username: state.user.username,
    stars: state.stars
    // The global state is {user: {username: 'stardude'}}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sky)
