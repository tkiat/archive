import {useEffect} from 'react'
// {/*{'OffscreenCanvas' in window ?*/}
// {/*<CanvasWorker id='canvas-worker' argumentCanvas={{...debouncedDimension, index: currentIndex, waveColors}} /> :*/}

const workerCode = document.querySelector('#workerCode').textContent;
const blob = new Blob([workerCode], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);
const worker = new Worker(url);
URL.revokeObjectURL(url); // cleanup

const ducks = document.getElementsByClassName('duck')

worker.onmessage = function(e) {
  for (let i = 0; i < ducks.length; i++) {
    ducks[i].style.transform = `translateY(${e.data[i].offsetY - ducks[i].clientHeight + 20}px) rotate(${e.data[i].offsetDeg}deg)`
  }
}

const CanvasWorker = ({argumentCanvas, id}) => {

  useEffect(() => {
    const canvas = document.querySelector('#canvas-worker')
    canvas.width = document.documentElement.clientWidth
    canvas.height = document.documentElement.clientHeight

    const offscreen = canvas.transferControlToOffscreen();
    worker.postMessage({msg: 'initiate', origin: window.location.origin, canvas: offscreen}, [offscreen]);
  }, [])

  const shouldMoveWave = argumentCanvas.index === 0 || argumentCanvas.index === 1

  useEffect(() => {
    const {from, to} = (function(){
      switch(argumentCanvas.index) {
        case 0: case 1:
          return {from: {x: 0, y: argumentCanvas.height - 30}, to: {x: argumentCanvas.width, y: argumentCanvas.height - 30}}
        default:
          return {from: {x: 0, y: 60}, to: {x: argumentCanvas.width, y: 120}}
      }
    })()
    const wavesConfig = {
      from,
      height: 20,
      num: 3,
      shakiness: 0,
      speed: 0.05,
      to,
      totalPoints: 5,
    }
    // const waveColors = ['rgba(0, 80, 160, 0.8)', 'rgba(0, 140, 200, 0.8)', 'rgba(0, 200, 240, 0.8)']
    worker.postMessage({msg: 'update', wavesConfig, waveColors: argumentCanvas.waveColors.current});
  },[shouldMoveWave])

  return <canvas id={id} width={argumentCanvas.width} height={argumentCanvas.height}/>
}

export default CanvasWorker
