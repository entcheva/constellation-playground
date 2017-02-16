import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logOutUser, fetchUsername, fetchStars, saveConstellation, fetchMyConstellations, addNewConstellation } from '../actions'
import Star from './Star'
import Constellation from './Constellation'


class Sky extends Component {

  handleLogOutClick() {
    this.props.logOutUser()
  }

  handleSaveClick() {
    const starsArray = this.props.constellation
    this.props.saveConstellation(starsArray)
    this.props.addNewConstellation(starsArray)
  }

  componentDidMount(){
    this.props.fetchUsername()
    this.props.fetchStars()
    this.props.fetchMyConstellations()
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
        <br />
        <div>
          <h2>My Constellations</h2>
            { this.props.myConstellations.map( (constellation, i) =>
              <h3 key={i}>{constellation.name} {constellation.stars_array}</h3>
            )}
            {/* { this.props.constellation.map( (star, i) =>
                <h3 key={i}>{star.id}</h3>
            )} */}
        </div>
        <button onClick={this.handleSaveClick.bind(this)}>Save Constellation</button>
        <br /><br />
        <button onClick={this.handleLogOutClick.bind(this)}>Log Out</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({logOutUser, fetchUsername, fetchStars, saveConstellation, fetchMyConstellations, addNewConstellation}, dispatch)
}

function mapStateToProps (state){
  return {
    username: state.user.username,
    stars: state.stars,
    constellation: state.constellation,
    myConstellations: state.myConstellations
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sky)
