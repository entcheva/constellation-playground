import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { getUsers } from '../actions'


class UserShow extends Component {

  render() {

    var style = {
      color: 'white',
      textAlign: 'center'
    }

    return(
      <div className="UserShow">
        <h1 style={style}>User Show</h1>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    listUsers: state.listUsers
  }
}
//
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({getUsers}, dispatch)
// }

export default connect(mapStateToProps)(UserShow)
