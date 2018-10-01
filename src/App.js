// fixed positions on loading project
// Note: Add menus for the shapes and containers
// Note: Add new package called react resizeable (https://github.com/STRML/react-resizable)

import React, { Component } from 'react'

import './App.css'
import Canvas from './containers/Canvas'
import IconMenu from './containers/IconMenu'
import FileMenu from './containers/FileMenu'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faUser } from '@fortawesome/free-solid-svg-icons'

import iconData from './data/iconData'

library.add(faStroopwafel)
library.add(faUser)

class App extends Component {
  state = {
    user: { name: "test_user", id: 1 },
    iconsOnMenu: iconData,
    currentProject: { 
      id: undefined,
      name: 'untitled',
      content: { 
        iconsOnCanvas: [
          // {type: 'hand point up', pos:{}},
          // {type: 'user', pos:{}}
        ]}
    },
    projects: [],
    selectedIcon: undefined,
    canvasDimensions: {top: 0, left: 0, right: 584, bottom: 584}
  }

  componentDidMount () {
    this.getAllUserProjects()
  }
  getAllUserProjects = () => {
    fetch(`http://localhost:3002/users/${this.state.user.id}`)
    .then(res => res.json())
    .then(user => this.setState({projects: user.projects}))
  }

  openProject = (project) => {
    this.setState({currentProject: 
      {...this.state.currentProject, 
        content: { iconsOnCanvas: JSON.parse(project.content)},
        id: project.id,
        name: project.name
      }})
  }

  handleDrag = (icon, event) => {

    console.log(event)
    const iconIndex = this.state.currentProject.content.iconsOnCanvas.indexOf(icon)
    const icons = this.state.currentProject.content.iconsOnCanvas
      
    icons[iconIndex].pos = {x: event.layerX, y: event.layerY}
    
    this.setState({currentProject: 
      {...this.state.currentProject, content: {
        iconsOnCanvas: icons}
      }}
      )
  }
  
  addToCanvas = (icon) => {
    let newArray = [...this.state.currentProject.content.iconsOnCanvas, icon ]
    this.setState({currentProject: 
      {...this.state.currentProject, content: {
        iconsOnCanvas: newArray}
      }}) 
  }

  removeFromCanvas = (icon) => {
    let array = [...this.state.currentProject.content.iconsOnCanvas]
    let newArray = array.filter( i => i !== icon )
    this.setState({currentProject: 
      {...this.state.currentProject, content: {
        iconsOnCanvas: newArray}
      }})
   
  }

  selectIcon = (icon) => {
      this.setState( { selectedIcon: icon })
  }

  deselectIcon = () => {
      this.setState( { selectedIcon: undefined })
  }

  saveProject = (projectName) => {
    
    let project = JSON.stringify(this.state.currentProject.content.iconsOnCanvas)

      const options = {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name:projectName, content: project, user_id: this.state.user.id})
      }

      return fetch(`http://localhost:3002/projects/${this.state.currentProject.id}`, options)
      .then( resp => resp.json()).then( data => console.log(data))
    }

  newProject = () => {

    let project = ''

    const options = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name:"titled", content: project, user_id: this.state.user.id})
    }

    return fetch(`http://localhost:3002/projects`, options)
    .then( resp => resp.json())
    .then(newProject => this.setState({currentProject: 
      {...this.state.currentProject, 
        content: { iconsOnCanvas: []},
        id: newProject.id,
      }}
      ))
  }

  render () {
    // saveProject().then(newProject => this.setState({ project: newProject }))
    return (
      <div className="main-container">
        <div className="menu">
          <FileMenu 
          saveProject={this.saveProject}
          newProject={this.newProject}
          openProject={this.openProject}
          projects={this.state.projects}/>
        </div>
        <div className="button-menu in-container">
          <IconMenu 
          availableIcons={this.state.iconsOnMenu} 
          addToCanvas={this.addToCanvas}/>
        </div>
        <div className="in-container">
        <Canvas 
            handleDrag={this.handleDrag} 
            iconsOnCanvas={this.state.currentProject.content.iconsOnCanvas}
            canvasDimensions={this.state.canvasDimensions}
            removeFromCanvas={this.removeFromCanvas}
            selectIcon={this.selectIcon}/>
        </div>   
      </div>
    )
  }
}

export default App
