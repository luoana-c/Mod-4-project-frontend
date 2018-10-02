import React from 'react'
import { Image } from 'semantic-ui-react'
import Draggable from 'react-draggable'
import '../css/canvas.css'


const DraggableTemplate = (props) => {
  return (
    <Draggable
      onDrag={props.handleDrag}
      bounds={props.canvasDimensions}
      position={props.position}
      defaultPosition={ { x: 0, y: 0} }
    >
      <div
        style={{width: 80, height: 112, position: 'absolute'}}
        onClick={() => {props.selectIcon(props.template)}}>
        <Image name={props.template.type} size='medium' />
      </div>
    </Draggable>
  )
}

export default DraggableTemplate
