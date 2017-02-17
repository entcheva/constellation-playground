import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logOutUser, fetchUsername, fetchStars, saveConstellation, fetchMyConstellations, addNewConstellation } from '../actions'
import SuperStar from './SuperStar'


class SkySVG extends Component {

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

  createLittleStars(){
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const starsArray = []
    const stars = 200
    for (let i = 0; i < stars; i++) {
      let x = Math.random() * windowWidth
      let y = Math.random() * windowHeight
      let radius = Math.random() * 1.2
      starsArray.push({
        key: i,
        cx: x,
        cy: y,
        r: radius
      })
    }
    return starsArray
  }


  render() {

      var background = {
        backgroundColor: '#000000'
      }

      var lineStyle = {
        stroke: '#ffffff',
        strokeWidth: 2
      }

      const starsArray = this.createLittleStars()
      return (
        <svg width={window.innerWidth} height={window.innerHeight} style={background}>
          { this.props.stars.map((star, i) =>
            <SuperStar key={i} id={star.id} x={star.x} y={star.y} z={star.z} />
          )}
          <line x1="30" y1="30" x2="100" y2="100" style={lineStyle}/>
          {starsArray.map( star => <circle key={star.key} cx={star.cx} cy={star.cy} r={star.r} fill="hsla(200, 100%, 50%, 0.8)" />)}
        </svg>
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

export default connect(mapStateToProps, mapDispatchToProps)(SkySVG)
