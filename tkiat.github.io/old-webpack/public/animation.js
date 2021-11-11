class Point {
  constructor(index, x, y, height, speed, shakiness) {
    this.x = x
    this.y = y
    this.fixedY = y
    this.moveStep = 30
    this.newY = y
    this.cur = index

    this.height = height
    this.speed = speed
    this.shakiness = shakiness
  }

  oscillate() {
    this.cur += this.speed
    this.y = this.fixedY + Math.sin(this.cur) * this.height + Math.random() * this.shakiness
  }
}

class Wave {
  constructor(index, totalPoints, from, to, height, speed, shakiness) {
    this.index = index
    this.points = []
    this.totalPoints = totalPoints
    this.from = from
    this.to = to

    this.height = height
    this.speed = speed
    this.shakiness = shakiness

    this.createPoints()
  }

  createPoints() {
    let coordinates = this.computeCoordinates()
    for (let i = 0; i < this.totalPoints; i++) {
      this.points[i] = new Point(this.index + i, coordinates[i].x, coordinates[i].y, this.height, this.speed, this.shakiness)
    }
  }

  computeCoordinates() {
    const pointGapX = (this.to.x - this.from.x) / (this.totalPoints - 1)
    const pointGapY = (this.to.y - this.from.y) / (this.totalPoints - 1)
    let coordinates = []
    for (let i = 0; i < this.totalPoints; i++) {
      coordinates[i] = {x: this.from.x + pointGapX * i, y: this.from.y + pointGapY * i}
    }
    return coordinates
  }
}

const drawWave = (ctx, wave, fillColor, willComputeOffset) => {
  let prevX = wave.points[0].x
  let prevY = wave.points[0].y

  ctx.beginPath()
  ctx.fillStyle = fillColor
  ctx.moveTo(prevX, prevY)

  const result = []
  const len = wave.points.length

  for (let i = 0; i < len; i++) {

    wave.points[i].oscillate()
    const cx = (prevX + wave.points[i].x) / 2
    const cy = (prevY + wave.points[i].y) / 2

    ctx.quadraticCurveTo(prevX, prevY, cx, cy)

    if(willComputeOffset && i < len - 1) {
      const offsetY = (wave.points[i].y + wave.points[i+1].y)/2
      const offsetDeg = Math.atan2(wave.points[i+1].y - wave.points[i].y, wave.points[i+1].x - wave.points[i].x) * 180 / Math.PI
      result.push({offsetDeg, offsetY})
    }

    prevX = wave.points[i].x
    prevY = wave.points[i].y
  }
  ctx.lineTo(prevX, prevY)
  ctx.lineTo(ctx.canvas.width, ctx.canvas.height)
  ctx.lineTo(wave.points[0].x, ctx.canvas.height)
  ctx.fill()
  ctx.closePath()
  return result
}
const drawWaves = (ctx, waves, colors) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  waves.forEach((wave, i) => {
    const willComputeOffset = (i === waves.length - 1)
    const x = drawWave(ctx, wave, colors[colors.length - 1 - i], willComputeOffset)
    willComputeOffset && postMessage(x)
  })
}

class Animation {
  constructor(ctx) {
    this.ctx = ctx
    this.run = false
    this.updated = false
    this.waves = undefined
    this.waveColors = undefined
    this.boundAnimate = this.animate.bind(this);
  }

  update(newWavesConfig, newWavesColor) {
    this.waves = [...Array(newWavesConfig.num).keys()].map(i => {
      return new Wave(i, newWavesConfig.totalPoints, newWavesConfig.from, newWavesConfig.to, newWavesConfig.height, newWavesConfig.speed, newWavesConfig.shakiness)
    })
    this.waveColors = newWavesColor
    this.updated = true
  }

  animate() {
    if (!this.run) return
    if (this.updated) {
      drawWaves(this.ctx, this.waves, this.waveColors)
    }
    requestAnimationFrame(this.boundAnimate)
  }

  stop() {
    this.run = false
  }

  initiate() {
    this.run = true
    this.animate()
  }
}
