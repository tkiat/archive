import React from 'react'
import DrawCanvas from './DrawCanvas.js'

const Canvas = props => {

  const canvasRef = DrawCanvas(props.argumentDrawCanvas)

  return <canvas className={props.className} ref={canvasRef} {...props.argumentCanvas}/>
}

export default Canvas
