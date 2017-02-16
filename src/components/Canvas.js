import React, { Component } from 'react'

export default class Canvas extends Component {

  componentDidMount() {
    const canvas = this.refs.starfield
    const context = canvas.getContext('2d')
    const stars = 200
    // context.fillRect(10, 10, 10, 10)
    // context.fillStyle = "black"
    for (let i = 0; i < stars; i++) {
      let x = Math.random() * canvas.offsetWidth
      let y = Math.random() * canvas.offsetHeight
      let radius = Math.random() * 1.2
      context.beginPath()
      context.arc(x, y, radius, 0, 360)
      context.fillStyle = "hsla(200, 100%, 50%, 0.8)"
      context.fill()
    }

  }





  render () {

    const background = {
      backgroundColor: "#000"
    }

    return (
      <div>
        <canvas ref="starfield" width={window.innerWidth} height={window.innerHeight} style={background}></canvas>
      </div>
    )
  }

}
