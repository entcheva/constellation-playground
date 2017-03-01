import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUsers } from '../actions'

class UserView extends Component {

  componentDidMount(){
    this.props.getUsers()
  }

  render() {

    var titleStyle = {
      color: 'white',
      textAlign: 'center'
    }

    return(
      <div className="UserView">
        <h1 style={titleStyle}>User View</h1>

      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getUsers}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserView)
