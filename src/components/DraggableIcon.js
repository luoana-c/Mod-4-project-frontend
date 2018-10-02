import React from 'react'
import { Icon } from 'semantic-ui-react'
import Draggable from 'react-draggable'
import Resizable from 're-resizable'
import '../css/canvas.css'

const DraggableIcon = (props) => {
  return (
    <Draggable
      onDrag={props.handleDrag}
      bounds={props.canvasDimensions}
      position={props.position}
      defaultPosition={{x: 0, y: 0}}
    >
      <Resizable style={{position: 'absolute'}}>
        <div
          style={{width: '100%', height: '100%', position: 'absolute'}}
          onClick={() => { props.selectIcon(props.icon) }}>
          <Icon style={{width: '100%', height: '100%'}} name={props.icon.type} />
        </div>
      </Resizable>
    </Draggable>
  )
}

export default DraggableIcon
