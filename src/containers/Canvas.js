import React from 'react'
import DraggableIcon from '../components/DraggableIcon'
import '../css/canvas.css'
import DraggableShape from '../components/Shape'

const Canvas = (props) => {
  return (
    <div className='canvas'>
      {props.iconsOnCanvas && props.iconsOnCanvas.map(icon => <DraggableIcon handleDrag={event => props.handleDrag(icon, event)} icon={icon} canvasDimensions={props.canvasDimensions}
        removeFromCanvas={props.removeFromCanvas}
        selectIcon={props.selectIcon} />)}
      <DraggableShape shapeType={'circle'} />
    </div>
  )
}

export default Canvas
