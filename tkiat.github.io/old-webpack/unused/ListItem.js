import styled from '@emotion/styled'

const ListItem = props => {
  const Item=styled('li')`
    margin: 2px;
    box-sizing: border-box;
  `
  const Btn=styled('button')`
    padding: 10px;
    border: none;
    cursor: pointer;
    font-size: 1em;
    color: var(--body-bg-color);
    background-color: hsl(var(--hue-p180), var(--saturation), ${props.isActive ? '45%' : '25%'}) !important;
    &:hover {
      background-color: hsl(var(--hue-p180), var(--saturation), ${props.isActive ? '45%' : '35%'}) !important;
    }
  `
    // color: var(${props.isActive ? '--body-text-color' : '--body-bg-color'});
  return <Item onClick={props.onclick}><Btn>{props.children}</Btn></Item>
}

export default ListItem
