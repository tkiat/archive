import {useRoutes} from 'hookrouter'

import NotFound       from 'NotFound.js'
import getHobbyRoutes from 'router/getHobbyRoutes.js'

const Content = props => {
  const routeResult = useRoutes(getHobbyRoutes(props.contents))
  return (
    <>
      <div className="content content--outside-water">
        {routeResult || <NotFound className='notfound--content' />}
      </div>
    </>
  )
}

export default Content
