import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconMenu = (props) => {
  return (
    <div className='ui icon menu'>
        {props.availableIcons.map(icon => {
          return <button className="ui icon button item">
            <FontAwesomeIcon icon={icon.type} />
          </button>
        })}
    </div>
  )
}

export default IconMenu