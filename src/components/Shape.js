import React from 'react'
import { Icon } from 'semantic-ui-react'
import Draggable from 'react-draggable'
import '../css/canvas.css'

const DraggableShape = (props) => {
    console.log(props)
  return (
    <Draggable onDrag={props.handleDrag} bounds={props.canvasDimensions}>
      <div style={{width: 16, height: 16, position: 'absolute'}} className={`shapeHolder ${props.shapeType}`}>
        <div></div>
      </div>
    </Draggable>
  )
}

export default DraggableShape
