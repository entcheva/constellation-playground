import React, { Component } from 'react';
import { connect } from 'react-redux'

class Constellation extends Component {

  render() {
    return (
      <div>
        <h2>Constellation:</h2>
          { this.props.constellation.map((star, i) =>
            <h4 key={i}>Star #{star.id}</h4>
          ) }
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
