const ReactMarkdownWithHtml = require('react-markdown/with-html')

const Cards = props => {
  return (
    <div className={'cards' + (props.isActive ? ' cards--active' : '')}>
      {
        props.items.map((item, i) => {
          return (
            <div className='cards__item' key={i}>
              <ReactMarkdownWithHtml children={item} allowDangerousHtml />
            </div>
          )
        })
      }
    </div>
  )
}

export default Cards
