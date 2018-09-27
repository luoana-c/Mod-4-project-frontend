import React, { Component } from 'react'

import './App.css'
import Canvas from './containers/Canvas'
import IconMenu from './containers/IconMenu'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faUser } from '@fortawesome/free-solid-svg-icons'

import iconData from './data/iconData'

library.add(faStroopwafel)
library.add(faUser)

class App extends Component {
  state = {
    iconsOnMenu: iconData,
    iconsOnCanvas: [
      // {type: 'hand point up', pos:{}},
      // {type: 'user', pos:{}}
    ],
    selectedIcon: undefined,
    canvasDimensions: {top: 0, left: 0, right: 584, bottom: 584}
  }

  handleDrag = (icon, event) => {
    const iconIndex = this.state.iconsOnCanvas.indexOf(icon)
    const icons = this.state.iconsOnCanvas
    icons[iconIndex].pos = {x: event.x, y: event.y}
    this.setState({
      iconsOnCanvas: icons
    })
    //
  }
  
  addToCanvas = (icon) => {
    let newArray = [...this.state.iconsOnCanvas, icon ]
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

  render () {
    return (
      <div className="main-container">
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
