import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logOutUser, fetchUsername, fetchStars } from '../actions/index'
import Star from './Star'


class Sky extends Component {

  handleLogOutClick() {
    // bring us to that Log Out action
    this.props.logOutUser()
  }

  componentDidMount(){
    this.props.fetchUsername()
    this.props.fetchStars()
  }

  render() {
    return (
      <div className="Sky">
        <p>You are on the sky page.</p>
        <h1>
          Welcome {this.props.username}
        </h1>
        <div>
          { this.props.stars.map((star, i) =>

            <Star id={star.id} x={star.x} y={star.y} z={star.z} key={i} />

          ) }
        </div>
        <button onClick={this.handleLogOutClick.bind(this)}>Log Out</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({logOutUser, fetchUsername, fetchStars}, dispatch)
}

function mapStateToProps (state){
  return {
    username: state.user.username,
    stars: state.stars
    // selectedStars: state.selectedStars
    // The global state is {user: {username: 'stardude'}}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sky)
