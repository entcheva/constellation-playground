import React, { Component } from 'react';
import { connect } from 'react-redux'

class Constellation extends Component {

  render() {
    const constellation = this.props.constellation.map((star) => star.id).join().replace(/,/g , ' ')
    return (
      <div>
        <h2>Creating constellation...</h2>
        <h1>{ constellation }</h1>
      </div>
    )
  }

}

function mapStateToProps (state){
  return {
    constellation: state.constellation
  }
}

export default connect(mapStateToProps)(Constellation)
