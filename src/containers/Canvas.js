import React from 'react'
import DraggableIcon from '../components/Icon'
import '../css/canvas.css'
import DraggableShape from '../components/Shape';

const Canvas = (props) => {
  return (
    <div className='canvas'>
      {props.iconsOnCanvas.map(icon => <DraggableIcon handleDrag={event => props.handleDrag(icon, event)} icon={icon} canvasDimensions={props.canvasDimensions}/>)}
      <DraggableShape shapeType={'circle'}></DraggableShape>
    </div>
  )
}

export default Canvas