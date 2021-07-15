import {Suspense, lazy} from 'react'

import Loading          from 'Loading.js'

const About   = lazy(() => import('content/About.js'))
const Hobby   = lazy(() => import('content/Hobby.js'))
const Resume  = lazy(() => import('content/Resume.js'))

const routes = {
  '/about*': () => () => 
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>,
  '/hobby*': () => () =>
      <Suspense fallback={<Loading />}>
        <Hobby />
      </Suspense>,
  '/resume': () => () =>
      <Suspense fallback={<Loading />}>
        <Resume />
      </Suspense>,
}

export default routes
