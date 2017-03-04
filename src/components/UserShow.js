import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import { fetchStars, saveConstellation, fetchMyConstellations, highlightConstellation, removeHighlight, clearConstellation } from '../actions'
import SuperStar from './SuperStar'
import Line from './Line'


class UserShow extends Component {

  constructor(props) {
    super(props)

    this.state = {
      littleStars: this.createLittleStars(),
      currentLines: [],
      recentLines: [],
      highlightedLines: [],
      conID: 1000000,
      conName: ""
    }
  }

  componentDidMount(){
    this.props.fetchStars()
  }

  createLittleStars(){
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const starsArray = []
    const stars = 1000
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

  mySkyClick(){
    this.props.clearConstellation()
    browserHistory.push('/sky')
  }

  usersClick(){
    browserHistory.push('/users')
  }

  render() {

    ///// Start creating lines from saved constellations /////

    const savedLines = []
    let conID
    const IDs = {}

    this.props.myConstellations.map( (constellation, i) => IDs[i] = constellation.id )

    if (this.props.myConstellations.length > 0) {

      const constellations = this.props.myConstellations

      let constellationsArray = []

      constellationsArray = constellations.map ( (constellation) => {
        return constellation.stars_array.map( (starID) => {
          return this.props.stars.find ( (star) => star.id == starID )
        } )
      } )

      constellationsArray.forEach ( (constellation, index) => {
        conID = IDs[index]
        constellation.map( (star, i) => {

          if (!!constellation[i + 1]){

            const star1x = star.x
            const star1y = star.y
            const star2x = constellation[i + 1].x
            const star2y = constellation[i + 1].y

            let line = {
              star1x: star1x,
              star1y: star1y,
              star2x: star2x,
              star2y: star2y,
              conID: conID
            }

            savedLines.push(line)
          }
        })
      })
    }


    ///// End creating lines from saved constellations /////

    var background = {
      backgroundColor: '#000000',
      cursor: 'crosshair'
    }

    var rectStyle = {
      fill: 'hsla(200, 100%, 50%, 0.8)',
    }

    var buttonStyle = {
      zIndex: 10,
      cursor: 'pointer'
    }

    var textStyle = {
      fontFamily: ['Montserrat', "Roboto", "Helvetica", "Arial", "sans-serif"],
      fontSize: 14
    }

    var conTextStyle = {
      fontFamily: ['Montserrat', "Roboto", "Helvetica", "Arial", "sans-serif"],
      fontSize: 16
    }

    var topTextStyle = {
      fontFamily: ['Merriweather', "Roboto", "Helvetica", "Arial", "sans-serif"],
      fontSize: 20,
    }

    let nameAlign = 0
    if (!!this.props.displayUser.username) {
      const usernameLength = this.props.displayUser.username.length
      nameAlign = window.innerWidth - (usernameLength * 11) - 65
    }

    return(
      <svg width={window.innerWidth} height={window.innerHeight} style={background}>

        <filter id="buttonglow" x="-150%" y="-150%" height="500%" width="500%">
          <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
          <feMerge>
          <feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {this.state.littleStars.map( star => <circle id="glow" key={star.key} cx={star.cx} cy={star.cy} r={star.r} fill="hsla(200, 100%, 50%, 0.8)" />)}

        { savedLines.map((line, i) =>
          <Line key={i} x1={line.star1x} y1={line.star1y} x2={line.star2x} y2={line.star2y} conID={line.conID} />
        ) }

        { this.state.currentLines.map((line, i) =>
          <Line key={i} x1={line.star1x} y1={line.star1y} x2={line.star2x} y2={line.star2y} conID={line.conID} />
        ) }

        { this.state.recentLines.map((line, i) =>
          <Line key={i} x1={line.star1x} y1={line.star1y} x2={line.star2x} y2={line.star2y} conID={line.conID} conName={line.conName}  />
        ) }

        { this.props.stars.map((star, i) =>
          <SuperStar key={i} id={star.id} x={star.x} y={star.y} z={star.z}  />
        )}

        <text x="20" y="30" style={topTextStyle} fill="white">✨ Constellation Playground ✨</text>

        <text x={nameAlign} y="30" style={topTextStyle} fill="white">✨ {this.props.displayUser.username} ✨</text>

        <text x={20 + this.props.showConstellation.mouseX} y={this.props.showConstellation.mouseY} style={conTextStyle} fill="white">{this.props.showConstellation.name}</text>

        <g onClick={this.mySkyClick.bind(this)} style={buttonStyle}>
         <rect width="90" height="30" x='20' y={window.innerHeight - 50} style={rectStyle} />
         <text x="40" y={window.innerHeight - 30} style={textStyle} fill="white">My Sky</text>
        </g>

        <g onClick={this.usersClick} style={buttonStyle}>
         <rect width="209" height="30" x={window.innerWidth - 229} y={window.innerHeight - 50} style={rectStyle} />
         <text x={window.innerWidth - 212} y={window.innerHeight - 30} style={textStyle} fill="white">Constellation Community</text>
        </g>

      </svg>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    stars: state.stars,
    constellation: state.constellation,
    myConstellations: state.myConstellations,
    showConstellation: state.showConstellation,
    highlighted: state.highlighted,
    displayUser: state.user.displayUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchStars, saveConstellation, fetchMyConstellations, highlightConstellation, removeHighlight, clearConstellation}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)
