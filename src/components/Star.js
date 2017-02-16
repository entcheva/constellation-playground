import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addToConstellation, removeFromConstellation } from '../actions'

class Star extends Component {

  // constructor(){
  //   super()
  //
  //   this.state = {
  //     selected: false,
  //     // timestamp: null
  //   }
  // }

  handleStarClick(event) {
    console.log(Date.now())
    console.log(this.props.id)
    const constellation = this.props.constellation.map((star) => star.id).join().replace(/,/g , ' ')
    if (constellation.includes(this.props.id)) {
      this.props.removeFromConstellation(this.props)
    } else {
      this.props.addToConstellation(this.props)
    }

    // if (this.state.selected === false){
    //   this.setState({
    //     selected: true,
    //     // timestamp: Date.now()
    //   })
    //   this.props.addToConstellation(this.props)
    // } else {
    //   this.setState({
    //     selected: false,
    //     // timestamp: null
    //   })
    //   this.props.removeFromConstellation(this.props)
    // }
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addToConstellation, removeFromConstellation}, dispatch)
}

const mapStateToProps = (state) => {
  return {
    constellation: state.constellation
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Star)
