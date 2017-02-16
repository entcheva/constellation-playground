import React, { Component } from 'react'

export default class Canvas extends Component {

  componentDidMount() {

    // make canvas
    const canvas = this.refs.starfield
    const context = canvas.getContext('2d')

    // tiny star background
    const stars = 200
    for (let i = 0; i < stars; i++) {
      let x = Math.random() * canvas.offsetWidth
      let y = Math.random() * canvas.offsetHeight
      let radius = Math.random() * 1.2
      context.beginPath()
      context.arc(x, y, radius, 0, 360)
      context.fillStyle = "hsla(200, 100%, 50%, 0.8)"
      context.fill()
    }

    context.arc(250, 250, 10, 0, 360)
    context.fillStyle = "white"
    context.fill()

  } // end componentDidMount



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
