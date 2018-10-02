import React from 'react'
import { Menu, Dropdown, Header, Modal, Button, Icon } from 'semantic-ui-react'

import SaveProjectButton from '../components/SaveProjectButton'
import NewProjectButton from '../components/NewProjectButton'
import OpenProjectButton from '../components/OpenProjectButton';

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
        <NewProjectButton 
        handleClose={this.handleClose}
        handleOpen={this.handleOpen}
        newProject={this.props.newProject}
        modalOpen={this.modalOpen}
        />
        
        <SaveProjectButton 
        handleClose={this.handleClose}
        handleOpen={this.handleOpen}
        saveProject={this.props.saveProject}
        modalOpen={this.modalOpen}
        projectName={this.props.projectName}
        />
        
        <OpenProjectButton 
        projects={this.props.projects} 
        openProject={this.props.openProject}/>
      </Menu>
    )
  }
}

// this.props.newProject
