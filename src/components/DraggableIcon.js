import React from 'react'
import { Icon } from 'semantic-ui-react'
import Draggable from 'react-draggable'
import '../css/canvas.css'


const DraggableIcon = (props) => {
  return (
    <Draggable
      onDrag={props.handleDrag}
      bounds={props.canvasDimensions}
      position={props.position}
      defaultPosition={{ x: 0, y: 0} }
    >
      <div
        style={{width: 16, height: 16, position: 'absolute'}}
        onClick={() => {props.selectIcon(props.icon)}}>
        <Icon name={props.icon.type} />
      </div>
    </Draggable>
  )
}

export default DraggableIcon
