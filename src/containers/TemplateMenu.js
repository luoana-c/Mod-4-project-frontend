import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Icon, Menu, Image } from 'semantic-ui-react'

import '../css/canvas.css'
import url from '../components/fileNameParser'

class TemplateMenu extends Component {
  render () {
    return (
      <Menu icon vertical>
        {this.props.availableTemplates.map((template, index) => {
          return <Menu.Item
            name={template.type}
            onClick={() => this.props.addToCanvas(template)}
            key={`menu-item-${index}`}>
            <Image src={url(template)} size='tiny' />
          </Menu.Item>
        })}
      </Menu>
    )
  }
}

export default TemplateMenu
