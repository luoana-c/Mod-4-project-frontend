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
    project: { 
      id: undefined,
      name: 'untitled',
      content: { 
        iconsOnCanvas: [
          // {type: 'hand point up', pos:{}},
          // {type: 'user', pos:{}}
        ]}
      },
    selectedIcon: undefined,
    canvasDimensions: {top: 0, left: 0, right: 584, bottom: 584}
  }

  handleDrag = (icon, event) => {
    const iconIndex = this.state.project.content.iconsOnCanvas.indexOf(icon)
    const icons = this.state.project.content.iconsOnCanvas
    icons[iconIndex].pos = {x: event.x, y: event.y}
    this.setState({project: 
      {...this.state.project, content: {
        iconsOnCanvas: icons}
      }}
    )
    //
  }
  
  addToCanvas = (icon) => {
    let newArray = [...this.state.project.content.iconsOnCanvas, icon ]
    this.setState({ iconsOnCanvas: newArray })
  }

  removeFromCanvas = (icon) => {
    let array = [...this.state.iconsOnCanvas]
    let newArray = array.filter( i => i !== icon )
    this.setState({ iconsOnCanvas: newArray })
    // this.setState({ iconsOnCanvas: newArray })
  }

  selectIcon = (icon) => {
      this.setState( { selectedIcon: icon })
  }

  deselectIcon = () => {
      this.setState( { selectedIcon: undefined })
  }

  saveProject = () => {
    
    let project = JSON.stringify(this.state.iconsOnCanvas)

      const options = {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name:"untitled", content: project, user_id: this.state.user.id})
      }

      return fetch(`http://localhost:3001/projects`, options)
    }

    newProject = () => {

      let project = ''

      const options = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name:"untitled", content: project, user_id: this.state.user.id})
      }

      return fetch(`http://localhost:3001/projects`, options)
      .then( resp => resp.json())
      .then(newProject => this.setState({ project: newProject }))
    

    }

  render () {
    // saveProject().then(newProject => this.setState({ project: newProject }))
    return (
      <div className="main-container">
        <div className="menu">
          <FileMenu 
          saveProject={this.saveProject}
          newProject={this.newProject}/>
        </div>
        <div className="button-menu in-container">
          <IconMenu 
          availableIcons={this.state.iconsOnMenu} 
          addToCanvas={this.addToCanvas}/>
        </div>
        <div className="in-container">
        <Canvas 
            handleDrag={this.handleDrag} 
            iconsOnCanvas={this.state.iconsOnCanvas}
            canvasDimensions={this.state.canvasDimensions}
            removeFromCanvas={this.removeFromCanvas}
            selectIcon={this.selectIcon}/>
        </div>   
      </div>
    )
  }
}

export default App
