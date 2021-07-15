const ReactMarkdownWithHtml = require('react-markdown/with-html')

const Content = props => {
  return (
  <div className={'markdown-content' + (props.isActive ? ' markdown-content--active' : '')}>
    <ReactMarkdownWithHtml children={props.content} allowDangerousHtml />
  </div>
  )
}

export default Content
