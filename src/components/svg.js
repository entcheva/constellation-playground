import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchStars } from '../actions'
// import Star from './Star'

class SVG extends React.Component {

  componentDidMount(){
    this.props.fetchStars()
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


  handleClick(star, event) {
    alert(`Clicked on star #${star}`)
  }

  render() {

    var background = {
      backgroundColor: '#000000'
    }

    var lineStyle = {
      stroke: '#ffffff',
      strokeWidth: 2
    }

    const starsArray = this.createLittleStars()
    return (
      <svg width={window.innerWidth} height={window.innerHeight} style={background}>
        { this.props.stars.map((star, i) =>
          <circle key={i} cx={star.x} cy={star.y} r={5} fill="white" onClick={this.handleClick.bind(this, i)} />
        )}
        <line x1="30" y1="30" x2="100" y2="100" style={lineStyle}/>
        {starsArray.map( star => <circle key={star.key} cx={star.cx} cy={star.cy} r={star.r} fill="white" />)}
      </svg>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchStars}, dispatch)
}

function mapStateToProps (state){
  return {
    username: state.user.username,
    stars: state.stars,
    constellation: state.constellation,
    myConstellations: state.myConstellations
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SVG)
