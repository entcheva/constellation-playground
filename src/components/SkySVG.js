import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logOutUser, fetchUsername, fetchStars, saveConstellation, fetchMyConstellations, addNewConstellation } from '../actions'
import SuperStar from './SuperStar'


class SkySVG extends Component {

  constructor(props) {
    super(props)

    this.state = {
      littleStars: this.createLittleStars()
    }
  }

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
    // const littleStars = this.createLittleStars()
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
        backgroundColor: '#000000',
        cursor: 'crosshair'
      }

      var rectStyle = {
        fill: 'hsla(200, 100%, 50%, 0.8)',
        strokeWidth: 1,
        stroke: 'white',
      }

      var buttonStyle = {
        zIndex: 10,
        cursor: 'pointer'
      }

      var textStyle = {
        fontFamily: "Verdana",
      }

      var lineStyle = {
        stroke: '#ffffff',
        strokeWidth: 2
      }

      // const littleStars = this.createLittleStars()

      return (

          // <svg width={window.innerWidth} height={window.innerHeight} style={background}>
          <svg width={window.innerWidth} height={window.innerHeight} style={background}>
            {this.state.littleStars.map( star => <circle key={star.key} cx={star.cx} cy={star.cy} r={star.r} fill="hsla(200, 100%, 50%, 0.8)" />)}
            { this.props.stars.map((star, i) =>
              <SuperStar key={i} id={star.id} x={star.x} y={star.y} z={star.z} />
            )}

            { this.props.lines.map((line, i) =>
              <line key={i} x1={line.star1x} y1={line.star1y} x2={line.star2x} y2={line.star2y} style={lineStyle} />
            ) }

            <text x={window.innerWidth - 110} y="20" style={textStyle} fill="white">{this.props.username}</text>
            <g onClick={this.handleSaveClick.bind(this)} style={buttonStyle}>
             <rect width="170" height="30" x='20' y={window.innerHeight - 50} rx="5" ry="5" style={rectStyle} />
             <text x="30" y={window.innerHeight - 30} style={textStyle} fill="white">Save Constellation</text>
            </g>
            <g onClick={this.handleLogOutClick.bind(this)} style={buttonStyle}>
             <rect width="100" height="30" x={window.innerWidth - 120} y={window.innerHeight - 50} rx="5" ry="5" style={rectStyle} />
             <text x={window.innerWidth - 100} y={window.innerHeight - 30} style={textStyle} fill="white">Log Out</text>
            </g>
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
    myConstellations: state.myConstellations,
    lines: state.lines
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkySVG)
