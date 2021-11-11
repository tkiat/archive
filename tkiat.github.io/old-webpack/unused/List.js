// import styled from '@emotion/styled'

const styleList = {
  'display': 'flex',
  'flexDirection': 'row',
  'flexWrap': 'wrap',

  'listStyleType': 'none',
  'margin': '0',
  'padding': '0',
}

const List = props => {
  return <ul style={styleList}>{props.children}</ul>
}

export default List
