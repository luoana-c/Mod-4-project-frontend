import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Icon, Menu, Image } from 'semantic-ui-react'

import '../css/canvas.css'

class TemplateMenu extends Component {
  render () {
    const url = image => {
      const fileName = image.type
        .toLowerCase()
        .replace(/\s/g, '_')

      const imageUrl = require(`../data/templates/${fileName}.png`)

      return imageUrl
    }

    return (
      <Menu icon vertical>
        {this.props.availableTemplates.map(template => {
          return <Menu.Item name={template.type} onClick={() => this.props.addToCanvas(template)}>
            <Image src={url(template)} size='tiny' />
          </Menu.Item>
        })}
      </Menu>
    )
  }
}

export default TemplateMenu
