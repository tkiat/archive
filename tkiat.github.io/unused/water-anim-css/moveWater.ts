import {getWaterMoveMethod} from './getWaterMoveMethod'

export const moveWater = (
  from: number,
  to: number,
  stepMs: number,
  itemsToWait: NodeListOf<Element>,
  callback: Function
): void => {
  new Promise<void>((resolve, reject) => {
    if (from === to) return {then: function() {}} // break promise chain
    if (isPositionValid(from) && isPositionValid(to)) {
      resolve()
    } else {
      reject('invalid input')
    }
  }).then(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      callback()
      return {then: function() {}}
    }
  }).then(() =>
    new Promise<void>((resolve, reject) => {
      if (!itemsToWait) {
        callback()
        reject('cannot find any items to wait')
      } else {
        toggleItemsWaiting(itemsToWait)
        resolve()
      }
    })
  ).then(() =>
    new Promise<number>(resolve => resolve(letsMoveWater(from, to, stepMs)))
  ).then(delay => new Promise(resolve => {setTimeout(resolve, delay)})
  ).then(() => {
    toggleItemsWaiting(itemsToWait)
    callback()
  })
  .catch(msg => console.error(msg))
}

const isPositionValid = (x: number): boolean => x >= 0 && x % 2 === 0

const letsMoveWater = (from: number, to: number, stepMs: number):
  number => {
  const dir = to > from ? 'right' : 'left'
  const step = to > from ? 2 : -2
  const transitionSteps =
    Array.from(new Array((to - from) / step + 1), (_, i) => from + i * step)

  const finalDelay = transitionSteps.reduce((delay, x) => {
    const mode = x === from ? 'drain' : (x === to ? 'stuck' : 'pass')
    const f = getWaterMoveMethod(dir, mode)
    return delay + f(x, delay, stepMs)
  }, 0)

  const cleanupDelay = (finalDelay + stepMs)
  return cleanupDelay
}

const toggleItemsWaiting = (list: NodeListOf<Element>) =>
  Array.prototype.map.call(list, x => x.classList.toggle('waiting'))
