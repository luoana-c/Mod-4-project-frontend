import React from 'react'
import { Image } from 'semantic-ui-react'
import Draggable from 'react-draggable'
import Resizable from 're-resizable'
import url from '../components/fileNameParser'
import '../css/canvas.css'

const DraggableTemplate = (props) => {
  return (
    <Draggable
      onDrag={props.handleDrag}
      bounds={props.canvasDimensions}
      position={props.position}
      defaultPosition={{x: 0, y: 0}}
    >
      <Resizable
        defaultSize={{
          width: 150,
          height: 200
        }}
        style={{
          background: `url(${url(props.template)})`,
          backgroundSize: 'contain', 
          backgroundRepeat: 'no-repeat'
        }}
        lockAspectRatio={true}
      >

      {/* <div
        style={{width: 300, height: 421, position: 'absolute'}}
        onClick={() => {props.selectIcon(props.template)}}>
        
      </div> */}
      </Resizable>

    </Draggable>
  )
}

export default DraggableTemplate

{/* <Image style={{pointerEvents: 'none'}} src={url(props.template)} name={props.template.type} size='medium' /> */}