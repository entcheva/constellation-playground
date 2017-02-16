import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logOutUser, fetchUsername, fetchStars, saveConstellation } from '../actions'
import Star from './Star'
import Constellation from './Constellation'


class Sky extends Component {

  handleLogOutClick() {
    this.props.logOutUser()
  }

  handleSaveClick() {
    const array = this.props.constellation
    this.props.saveConstellation(array)
  }

  componentDidMount(){
    this.props.fetchUsername()
    this.props.fetchStars()
  }

  render() {
    return (
      <div className="Sky">
        <p>You are on the sky page.</p>
        <h1>Welcome {this.props.username}</h1>
        <div>
          { this.props.stars.map((star, i) =>
            <Star id={star.id} x={star.x} y={star.y} z={star.z} key={i} />
          ) }
        </div>
        <div>
          <Constellation />
        </div>
        <button onClick={this.handleSaveClick.bind(this)}>Save Constellation</button>
        <br /><br />
        <button onClick={this.handleLogOutClick.bind(this)}>Log Out</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({logOutUser, fetchUsername, fetchStars, saveConstellation}, dispatch)
}

function mapStateToProps (state){
  return {
    username: state.user.username,
    stars: state.stars,
    constellation: state.constellation
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sky)
