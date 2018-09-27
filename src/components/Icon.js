import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Draggable from 'react-draggable'
import '../css/canvas.css'

const Icon = (props) => {
  return (
    <Draggable onDrag={props.handleDrag} bounds={{top: 0, left: 0, right: 184, bottom: 184}}>
      <div style={{width: 16, height: 16, position: 'absolute'}}>
        <FontAwesomeIcon icon={props.icon.type} />
      </div>
    </Draggable>
  )
}

export default Icon
