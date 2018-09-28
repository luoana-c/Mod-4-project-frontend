import React from 'react'
import { Menu, Dropdown, Header, Modal, Button, Icon } from 'semantic-ui-react'

// give its own state?
//Put an if else statement somewhere in code to handle condition where project already has a name

export default class NewProjectButton extends React.Component {
  render () {
    return (
      <Menu.Item>
        <Modal onClose={this.props.handleClose} open={this.props.modalOpen} trigger={<Button onClick={this.props.handleOpen}>New Project</Button>} basic size='small'>
          <Header icon='archive' content='Create New Project' />
          <Modal.Content>
            <p>Are you sure you want to create a new project?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.props.handleClose} basic color='red' inverted>
              <Icon name='remove' /> No
            </Button>
            <Button onClick={() => {
              this.props.newProject()
              this.props.handleClose()
            }}
            color='green' inverted>
              <Icon name='checkmark' />Yes
            </Button>
          </Modal.Actions>
        </Modal>
      </Menu.Item>
    ) 
}
}
