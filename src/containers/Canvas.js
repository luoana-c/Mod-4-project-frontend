import React from 'react'
import DraggableIcon from '../components/DraggableIcon'
import '../css/canvas.css'
// import DraggableShape from '../components/Shape'
import DraggableTemplate from '../components/DraggableTemplate';

const Canvas = (props) => {
  return (
    <div className='canvas'>
      {props.iconsOnCanvas && props.iconsOnCanvas.map(icon =>
        <DraggableIcon
          handleDrag={event => props.handleDrag(icon, event)} 
          icon={icon}
          canvasDimensions={props.canvasDimensions}
          removeFromCanvas={props.removeFromCanvas}
          selectIcon={props.selectIcon}
          position={icon.pos}
        />)}
      {props.templatesOnCanvas && props.templatesOnCanvas.map(template =>
        <DraggableTemplate
          handleDrag={event => props.handleDrag(template, event)} 
          template={template}
          canvasDimensions={props.canvasDimensions}
          removeFromCanvas={props.removeFromCanvas}
          selectIcon={props.selectIcon}
          position={template.pos}
        />)}
    </div>
  )
}

export default Canvas
