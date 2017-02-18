import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addToConstellation, removeFromConstellation, createLine } from '../actions'

class SuperStar extends Component {

  handleStarClick(event) {
    console.log(this.props.x)
    console.log(this.props.y)
    const constellation = this.props.constellation.map((star) => star.id)
    // How do we gain access to the global state (constellation) without mapping state to props?
    if (constellation.includes(this.props.id)) {
      this.props.removeFromConstellation({
        id: this.props.id,
        x: this.props.x,
        y: this.props.y,
        z: this.props.z
      })
    } else {
      this.props.addToConstellation({
        id: this.props.id,
        x: this.props.x,
        y: this.props.y,
        z: this.props.z
      })
    }
  }

  // componentDidUpdate(prevProps) {
  //   const starsArray = this.props.constellation
  //   if (starsArray.length > 1) {
  //     // const star1x = starsArray[starsArray.length - 1].x
  //     // const star1y = starsArray[starsArray.length - 1].y
  //     // const star2x = starsArray[starsArray.length - 2].x
  //     // const star2y = starsArray[starsArray.length - 2].y
  //     // const existingLine = this.props.lines.filter(function(line){
  //     //   return line.star1x === star1x && line.star1y === star1y && line.star2x === star2x && line.star2y === star2y
  //     // })
  //     // if (existingLine.length === 0) {
  //       this.props.createLine(starsArray, this.props.lines)
  //     // }
  //   }
  //
  // }






  render() {

    return (
      <circle onClick={this.handleStarClick.bind(this)} cx={this.props.x} cy={this.props.y} r='5' fill='white' />
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addToConstellation, removeFromConstellation, createLine}, dispatch)
}

const mapStateToProps = (state) => {
  return {
    constellation: state.constellation
    // lines: state.lines
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuperStar)
