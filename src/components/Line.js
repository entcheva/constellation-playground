import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { highlightConstellation, removeHighlight } from '../actions'

class Line extends Component {

  constructor(){
    super()

    this.state = {
      stroke: '#fff',
      strokeWidth: 1
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.conID === nextProps.highlighted) {
      this.setState({
        stroke: 'hsla(200, 100%, 50%, 0.8)',
        strokeWidth: 4
      })
    } else {
      this.setState({
        stroke: '#fff',
        strokeWidth: 1
      })
    }

  }

  handleLineHover() {
    this.props.highlightConstellation(this.props.conID)
  }

  handleMouseLeave() {
    this.props.removeHighlight()
  }

  render(){

    let lineStyle = this.state

    return(
      <line onMouseEnter={this.handleLineHover.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)} x1={this.props.x1} y1={this.props.y1} x2={this.props.x2} y2={this.props.y2} style={lineStyle}/>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({highlightConstellation, removeHighlight}, dispatch)
}

const mapStateToProps = (state) => {
  return {
    constellation: state.constellation,
    highlighted: state.highlighted
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Line)
