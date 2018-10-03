import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Image, Icon, Menu } from 'semantic-ui-react'

import '../css/canvas.css'
import url from '../components/iconNameParser'

const IconMenu = (props) => {
  return (
    <Menu icon pointing secondary vertical>
      {props.availableIcons.map((icon, index) => {
        return <Menu.Item
          name={icon.type}
          onClick={() => props.addToCanvas(icon)}
          key={`menu-icon-${index}`}>
           <Image src={url(icon)} size='mini' />
        </Menu.Item>
      })}
    </Menu>
  )
}

export default IconMenu
