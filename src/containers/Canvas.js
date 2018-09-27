import React from 'react'
import Icon from '../components/Icon'
import '../css/canvas.css'

const Canvas = (props) => {
  return (
    <div className='canvas'>
      {props.iconsOnCanvas.map(icon => <Icon handleDrag={event => props.handleDrag(icon, event)} icon={icon} />)}
    </div>
  )
}

export default Canvas