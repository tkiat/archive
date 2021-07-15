import {useEffect, useMemo, useRef, useState} from 'react'
import {useRoutes, useRedirect} from 'hookrouter'
import {useImmer} from 'use-immer'

import NotFound      from 'NotFound.js'
import SafariWarning from 'SafariWarning.js'
import Canvas        from 'canvas/Canvas.js'
import Contact       from 'content/Contact.js'
import Sidebar       from 'content/Sidebar.js'
import Title         from 'content/Title.js'
import Duck          from 'duck/Duck.js'
import DuckSidebar   from 'duck/DuckSidebar.js'
import useDebounce   from 'hook-custom/useDebounce.js'
import NavBar        from 'navbar/NavBar.js'
import getMainRoutes from 'router/getMainRoutes.js'

import {ReactComponent as Sakura} from 'background/sakura.svg'
import {ReactComponent as Desert} from 'background/desert.svg'
import {ReactComponent as Ocean}  from 'background/ocean.svg'
import {ReactComponent as Snow}   from 'background/snow.svg'

import 'sass/main.scss'
// TODO in projects show keyword tooltip instead
// TODO what if in project we add another navbar left sidebar and show project on the right
// TODO do anim project https://lihautan.com/blogs/
// TODO stop compute duck if speed none
// TODO stop compute wave if height none

const getCustomStylesheet = () => {
  return `
  [theme-supplement='custom'] {
    --duck-beak-color:${localStorage.getItem('--duck-beak-color') ?? 'rgb(0, 0, 0)'};
    --duck-body-color:${localStorage.getItem('--duck-body-color') ?? 'rgb(0, 0, 0)'};
    --duck-wing-color:${localStorage.getItem('--duck-wing-color') ?? 'rgb(0, 0, 0)'};
    --tube-stroke-color:${localStorage.getItem('--tube-stroke-color') ?? 'rgb(0, 0, 0)'};
    --tube-water-color:${localStorage.getItem('--tube-water-color') ?? 'rgb(0, 0, 0)'};
    --wave-front0-color:${localStorage.getItem('--wave-front0-color') ?? 'rgb(0, 0, 0)'};
    --wave-front1-color:${localStorage.getItem('--wave-front1-color') ?? 'rgb(0, 0, 0)'};
    --wave-front2-color:${localStorage.getItem('--wave-front2-color') ?? 'rgb(0, 0, 0)'};
  }`
}
const timeFallback = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'day'
const themeFallback = 'sakura'
const toggleSidebar = () => {
  document.getElementById('root').classList.toggle('move')
  document.getElementById('sidebar-toggler').classList.toggle('sidebar-toggler--appear')
  document.getElementById('duck-sidebar').classList.toggle('duck--active')
}

const userAgentString = navigator.userAgent
const isSafariAgent = userAgentString.indexOf("Safari") > -1 && userAgentString.indexOf("Chrome") === -1
let willShowSafariPrompt = isSafariAgent && (localStorage.getItem('will-skip-safari-prompt') !== "true")

function App() {
  const [dimensions, setDimensions] = useImmer({
    height: document.documentElement.clientHeight,
    width: document.documentElement.clientWidth
  })
  const debouncedDimension = useDebounce(dimensions, 1000)

  const [, triggerReRender] = useState(undefined)

  const [time, setTime] = useImmer(localStorage.getItem('time') ?? timeFallback)
  useEffect(() => {
    document.documentElement.setAttribute('time', time)
    localStorage.setItem('time', time)
  },[time])

  const [theme, setTheme] = useImmer({
    'base': localStorage.getItem('theme-base') ?? themeFallback,
    'supplement': localStorage.getItem('theme-supplement') ?? themeFallback,
    'custom-base': localStorage.getItem('theme-custom-base') ?? themeFallback,
  })

  const levels = [0, 1, 2, 3]
  const urlAtIndex = ['/about', '/hobby', '/resume', '/settings']

  const currentIndex = levels.find(level => window.location.pathname.startsWith(urlAtIndex[level])) || levels[0]
  const totalPoints = levels.length + 1

  const waveColors = useRef([undefined, undefined, undefined])
  const duckColors = useRef({
    'beak': undefined,
    'body': undefined,
    'wing': undefined,
  })
  const tubeColors = useRef({
    'stroke': undefined,
    'water' : undefined,
  })
  const [wavePhysics, setWavePhysics] = useImmer({
    'height': 10,
    'speed': window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 0.05,
    'shakiness': 0,
  })

  const shouldMoveWave = currentIndex === 0 || currentIndex === 1

  const wavesConfig = useMemo(() => {
    const {from, to} = (function(){
      switch(currentIndex) {
        case 0: case 1:
          return {from: {x: 0, y: debouncedDimension.height - 30}, to: {x: debouncedDimension.width, y: debouncedDimension.height - 30}}
        default:
          return {from: {x: 0, y: 120}, to: {x: debouncedDimension.width, y: 200}}
      }
    })()
    return {
      ...wavePhysics,
      'from': from,
      'to': to,
      totalPoints,
      'num': 3,
    }
  // eslint-disable-next-line
  }, [shouldMoveWave, debouncedDimension, wavePhysics.height, wavePhysics.speed, wavePhysics.shakiness, totalPoints])

  useEffect(() => {
    const themeSupplementCustomElem = document.createElement('style')
    themeSupplementCustomElem.id = 'theme-custom-supplement'
    document.head.appendChild(themeSupplementCustomElem)
    themeSupplementCustomElem.sheet.insertRule(getCustomStylesheet(), 0)

    const debouncedHandleResize = () => {
      setDimensions(draft => {
        draft.height = document.documentElement.clientHeight
        draft.width = document.documentElement.clientWidth
      })
    }
    window.addEventListener('resize', debouncedHandleResize)
    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [setDimensions])

  useEffect(() => {
    document.documentElement.setAttribute('theme-base', theme.base)
  },[theme.base])

  useEffect(() => {
    document.documentElement.setAttribute('theme-supplement', theme.supplement)

    const computedRootStyle = getComputedStyle(document.documentElement)
    waveColors.current = [0, 1, 2].map(n => {
      return computedRootStyle.getPropertyValue('--wave-front' + n + '-color')
    })
    duckColors.current = ({
      'beak': computedRootStyle.getPropertyValue('--duck-beak-color'),
      'body': computedRootStyle.getPropertyValue('--duck-body-color'),
      'wing': computedRootStyle.getPropertyValue('--duck-wing-color'),
    })
    tubeColors.current = ({
      'stroke': computedRootStyle.getPropertyValue('--tube-stroke-color'),
      'water' : computedRootStyle.getPropertyValue('--tube-water-color'),
    })
  },[theme.supplement, time])

  const tabIndexDefault = {
    0: parseInt(localStorage.getItem('tabIndexLv0Cur') ?? '0'),
    1: parseInt(localStorage.getItem('tabIndexLv1Cur') ?? '0'),
  }
  const navItemsAtIndex = {
    0: ['/Intro', '/WhoIAm', '/WhatIUse', '/Others'],
    1: ['/Web', '/PC', '/Environment', '/Others'],
  }

  useRedirect('/', '/about')
  useRedirect('/about', '/about'       + navItemsAtIndex[0][tabIndexDefault[0]])
  useRedirect('/hobby', '/hobby' + navItemsAtIndex[1][tabIndexDefault[1]])

  const routeResult = useRoutes(getMainRoutes)

  const getBackground = (theme) => {
    switch(theme) {
      case 'ocean':
        return <Ocean className='background' />
      case 'desert':
        return <Desert className='background' />
      case 'sakura':
        return <Sakura className='background' />
      case 'snow':
        return <Snow className='background' />
      default:
        return <></>
    }
  }

  if(willShowSafariPrompt){
    return <SafariWarning onclick={() => {willShowSafariPrompt = false; localStorage.setItem('will-skip-safari-prompt', true); triggerReRender({})}} />
  } else {
    return (
      <>
        <main id='main' className='main'>
          {(currentIndex === 0 || currentIndex === 1) &&
          <NavBar navItemIndexOffset={[0, navItemsAtIndex[0].length]} tabIndexDefault={tabIndexDefault} level={currentIndex} baseURL={urlAtIndex[currentIndex]} items={navItemsAtIndex[currentIndex]} />
          }
          {routeResult !== null ? routeResult({}) : <NotFound />}
          {currentIndex === 2 && <Contact />}
          <Canvas className='canvas' argumentCanvas={debouncedDimension} argumentDrawCanvas={{wavesConfig, waveColors}} aria-label='Background Wave' role='img' />
          {getBackground(theme.base)}
          {['DuckAboutMe', 'DuckHobby', 'DuckResume'].map((duck, index) =>
          <Duck
            key={index}
            index={index}
            href={urlAtIndex[index]}
            isActive={currentIndex === index}
            shape={duck}
            text={['About', 'Hobby', 'Resume'][index]} />
          )}
          <DuckSidebar
            myId='duck-sidebar'
            index={3}
            shape='DuckSidebar'
            text='Settings'
            toggleSidebar={toggleSidebar} />
          <Title index={currentIndex} />
          <Sidebar
            wavePhysics={wavePhysics} setWavePhysics={setWavePhysics}
            theme={theme}             setTheme={setTheme}
            time={time}               setTime={setTime}
            duckColors={duckColors}
            tubeColors={tubeColors}
            waveColors={waveColors}
            getCustomStylesheet={getCustomStylesheet}
            toggleSidebar={toggleSidebar} />
        </main>
      </>
    )
  }
}

export default App
