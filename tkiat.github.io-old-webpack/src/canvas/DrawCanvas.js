import {useEffect, useRef} from 'react'

import {drawWaves}          from 'canvas/wave/drawWaves.js'
import {moveDucksAlongWave} from './moveDucksAlongWave.js'
import Wave                 from 'canvas/wave/Wave.js'

const DrawCanvas = (argument) => {

  const canvasRef = useRef(null)

  const {wavesConfig, waveColors} = argument

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    const waves = [...Array(wavesConfig.num).keys()].map(i => {
      return new Wave(i, wavesConfig.totalPoints, wavesConfig.from, wavesConfig.to, wavesConfig.height, wavesConfig.speed, wavesConfig.shakiness)
    })

    const ducks = document.getElementsByClassName('duck')
    const creatureOffset = 20
    let animationFrameId

    const render = () => {
      drawWaves(context, waves, waveColors.current)
      moveDucksAlongWave(ducks, waves[waves.length - 1], creatureOffset)
      animationFrameId = window.requestAnimationFrame(render)
    }
    window.requestAnimationFrame(render)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  // eslint-disable-next-line
  }, [wavesConfig])

  return canvasRef
}

export default DrawCanvas
