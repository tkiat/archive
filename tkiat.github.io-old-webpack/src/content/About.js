import {useRoutes} from 'hookrouter'

import NotFound       from 'NotFound.js'
import getAboutRoutes from 'router/getAboutRoutes.js'

const About = props => {
  const routeResult = useRoutes(getAboutRoutes(props.contents))
  return (
    <>
      <div className="content content--outside-water">
        {routeResult || <NotFound className='notfound--content' />}
      </div>
    </>
  )
}

export default About
