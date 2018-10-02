import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Icon, Menu } from 'semantic-ui-react'
import templates from '../data/templateData.js'

import '../css/canvas.css'

const TemplateMenu = (props) => {
  return (
    <Menu icon vertical>
      {props.availableIcons.map(icon => {
        return <Menu.Item name={icon.type} onClick={() => props.addToCanvas(icon)}>
          <Icon name={icon.type} />
        </Menu.Item>
      })}
    </Menu>
  )
}

export default TemplateMenu
