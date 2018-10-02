import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Icon, Menu } from 'semantic-ui-react'

import '../css/canvas.css'

const IconMenu = (props) => {
  return (
    <Menu icon vertical>
      {props.availableIcons.map((icon, index) => {
        return <Menu.Item 
          name={icon.type} 
          onClick={() => props.addToCanvas(icon)}
          key={`menu-icon-${index}`}>
          <Icon name={icon.type} />
        </Menu.Item>
      })}
    </Menu>
  )
}

export default IconMenu
