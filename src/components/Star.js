import React, { Component } from 'react'

export default class Star extends Component {

  constructor(){
    super()

    this.state = {
      selected: false,
      timestamp: null
    }
  }

  handleStarClick(event) {
    console.log(Date.now())
    console.log(this.props.id)
    if (this.state.selected === false){
      this.setState({
        selected: true,
        timestamp: Date.now()
      })
      this.addToConstellation()
    } else {
      this.setState({
        selected: false,
        timestamp: null
      })
      this.removeFromConstellation()
    }
  }

  addToConstellation(){
    // Push to Redux Constellation state
  }

  removeFromConstellation(){
    // Remove from Redux Constellation state
  }

  render() {
    return (
      <p>
        <button onClick={this.handleStarClick.bind(this)} >
          Star ID: {this.props.id} X: {this.props.x} Y: {this.props.y} Z: {this.props.z}
        </button>
      </p>
    )
  }

}
