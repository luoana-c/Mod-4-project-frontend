import React from 'react'
import DraggableIcon from '../components/DraggableIcon'
import '../css/canvas.css'
// import DraggableShape from '../components/Shape'
import DraggableTemplate from '../components/DraggableTemplate';

const Canvas = (props) => {
  return (
    <div className='canvas'>
      {props.templatesOnCanvas && props.templatesOnCanvas.map((template, index) =>
        <DraggableTemplate
          key={`canvas-template-${index}`}
          handleDrag={event => props.handleDrag(template, event)}
          handleResize={event => props.handleResize(template, event)}
          template={template}
          canvasDimensions={props.canvasDimensions}
          removeFromCanvas={props.removeFromCanvas}
          selectIcon={props.selectIcon}
          position={template.pos}
          // size={template.size}
        />)}
      {props.iconsOnCanvas && props.iconsOnCanvas.map((icon, index) =>
        <DraggableIcon
          key={`canvas-icon-${index}`}
          handleDrag={event => props.handleDrag(icon, event)} 
          handleResize={event => props.handleResize(icon, event)} 
          icon={icon}
          canvasDimensions={props.canvasDimensions}
          removeFromCanvas={props.removeFromCanvas}
          selectIcon={props.selectIcon}
          position={icon.pos}
          // size={icon.size}
        />)}
    </div>
  )
}

export default Canvas
