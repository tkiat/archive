import {useRoutes} from 'hookrouter'

import NotFound     from 'content/NotFound.js'
import getSubRoutes from 'router/getSubRoutes.js'

const AboutMe = props => {
  const routeResult = useRoutes(getSubRoutes(props.pages, props.contents))
  return (
    <>
      <div className="content content--level1">
        {routeResult || <NotFound />}
      </div>
    </>
  )
}

export default AboutMe
