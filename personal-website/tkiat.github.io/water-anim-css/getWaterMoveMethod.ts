type FlowDirection = 'left' | 'right'
type FlowMode = 'drain' | 'pass' | 'stuck'

type DelayMs = number
type Index = number
type NextDelayMs = number
type TotalTime = number

type R = (...args: number[]) => number
export const getWaterMoveMethod = (d: FlowDirection, m: FlowMode): R => {
  if      (d === 'left' && m === 'drain') return drainToLeft
  else if (d === 'left' && m === 'pass' ) return passToLeft
  else if (d === 'left' && m === 'stuck') return stuckToLeft
  else if (d === 'right' && m === 'drain') return drainToRight
  else if (d === 'right' && m === 'pass' ) return passToRight
  else if (d === 'right' && m === 'stuck') return stuckToRight
  else return () => 0
}

const drainToLeft = (i: Index, d: DelayMs, t: TotalTime = 0): NextDelayMs => {
  triggerWaterFlow(i, 'drain-to-left-text', d)
  triggerWaterFlow(i + 1, 'drain-to-left-valve', d)
  return (t * 1.16 * 20) / 116
}
const drainToRight = (i: Index, d: DelayMs, t: TotalTime = 0): NextDelayMs => {
  triggerWaterFlow(i, 'drain-to-right-text', d)
  triggerWaterFlow(i + 1, 'drain-to-right-valve', d)
  return (t * 1 * 4) / 100
}
const passToLeft = (i: Index, d: DelayMs, t: TotalTime = 0): NextDelayMs => {
  triggerWaterFlow(i, 'pass-to-left-text', d)
  triggerWaterFlow(i + 1, 'pass-to-left-valve', d)
  return (t * 2.16 * 120) / 216
}
const passToRight = (i: Index, d: DelayMs, t: TotalTime = 0): NextDelayMs => {
  triggerWaterFlow(i, 'pass-to-right-text', d)
  triggerWaterFlow(i + 1, 'pass-to-right-valve', d)
  return (t * 2.16 * 120) / 216
}
const stuckToLeft = (i: Index, d: DelayMs): NextDelayMs => {
  triggerWaterFlow(i, 'stuck-to-left-text', d)
  triggerWaterFlow(i + 1, 'stuck-to-left-valve', d)
  return 0
}
const stuckToRight = (i: Index, d: DelayMs): NextDelayMs => {
  triggerWaterFlow(i, 'stuck-to-right-text', d)
  triggerWaterFlow(i + 1, 'stuck-to-right-valve', d)
  return 0
}

const triggerWaterFlow = (i: Index, className: string, d: DelayMs): void => {
  const h = document.getElementById('nav-sub__highlighter-item' + i)
  if (!h) return
  h.className = 'nav-sub__highlighter-item'
  h.classList.add(className)
  h.style.animationDelay = (d / 1000) + 's'
}
