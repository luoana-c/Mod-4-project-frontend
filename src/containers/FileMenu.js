import React from 'react'
import { Menu, Dropdown, Header, Modal, Button, Icon } from 'semantic-ui-react'

import SaveProjectButton from '../components/SaveProjectButton'
import NewProjectButton from '../components/NewProjectButton'

export default class FileMenu extends React.Component {
  state = { modalOpen: false,
            projectName: "" }


  setProjectName = (name) => {
    this.setState({projectName:name})
  }          
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
        <NewProjectButton 
        handleClose={this.handleClose}
        handleOpen={this.handleOpen}
        projectName={this.state.projectName}
        saveProject={this.props.saveProject}
        modalOpen={this.modalOpen}
        />
        
        <SaveProjectButton 
        handleClose={this.handleClose}
        handleOpen={this.handleOpen}
        projectName={this.state.projectName}
        saveProject={this.props.saveProject}
        modalOpen={this.modalOpen}
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
