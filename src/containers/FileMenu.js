import React from 'react'
import { Menu, Dropdown, Header, Modal, Button, Icon } from 'semantic-ui-react'

export default class FileMenu extends React.Component {
  state = { modalOpen: false }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleOpen = () => {
    this.setState( { modalOpen: true } )
  }

  handleClose = () => {
    this.setState( { modalOpen: false } )
  }

  render() {
    const { activeItem, modalOpen } = this.state

    return (
      <Menu>
        <Menu.Item>
        <Modal onClose={this.handleClose} open={ modalOpen } trigger={<Button onClick={this.handleOpen}>New Project</Button>} basic size='small'>
            <Header icon='archive' content='Create New Project' />
            <Modal.Content>
              <p>Are you sure you want to create a new project?</p>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={this.handleClose} basic color='red' inverted>
                <Icon name='remove' /> No
              </Button>
              <Button onClick={() => {
                this.props.newProject()
                this.handleClose()
                }} 
                color='green' inverted>
                <Icon name='checkmark' />Yes
              </Button>
            </Modal.Actions>
          </Modal>
        </Menu.Item>
        <Menu.Item
          name='Save project'
          active={activeItem === 'Save project'}
          onClick={this.props.saveProject}
        />
        <Dropdown item text='Open project'>
          <Dropdown.Menu>
            <Dropdown.Item>asd</Dropdown.Item>
            <Dropdown.Item>asd</Dropdown.Item>
            <Dropdown.Item>asd</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </Menu>
    )
  }
}

// this.props.newProject