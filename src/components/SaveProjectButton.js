import React from 'react'
import { Menu, Dropdown, Header, Modal, Button, Icon } from 'semantic-ui-react'

export default class SaveProjectButton extends React.Component {

  state = { 
    projectName: '',
    modalOpen: false 
  }

  handleOpen = () => {
    this.setState( { modalOpen: true } )
  }

  handleClose = () => {
    this.setState( { modalOpen: false } )
  }
  
  render () {
    return (
      <Menu.Item>
        <Modal 
        onClose={this.handleClose} 
        open={this.state.modalOpen} 
        trigger={<Button onClick={this.handleOpen}>Save Project</Button>} 
        basic size='small'>
          <Header icon='archive' content='Save Project' />
          <Modal.Content>
            <p>Please name your Project:</p>
            <input onChange={(event) => this.setState({projectName: event.target.value})} 
            type='text' 
            value={this.props.projectName} />
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.handleClose} 
            basic color='red' 
            inverted>
              <Icon name='remove' /> Cancel
            </Button>
            <Button onClick={() => {
              this.props.saveProject(this.state.projectName)
              this.handleClose()
            }}
            color='green' inverted>
              <Icon name='checkmark' />Save
            </Button>
          </Modal.Actions>
        </Modal>
      </Menu.Item>
    ) 
  }
}
