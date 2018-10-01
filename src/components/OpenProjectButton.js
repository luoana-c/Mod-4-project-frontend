import React from 'react'
import { Dropdown, Button, Icon } from 'semantic-ui-react'

const OpenProjectButton = (props) => {
  return (<Dropdown item text='Open project'>
    <Dropdown.Menu>
      {
        props.projects.map(project =>
          <Dropdown.Item onClick={() => props.openProject(project)}>{`${project.name}`}</Dropdown.Item>
        )}
    </Dropdown.Menu>
  </Dropdown>)
}

export default OpenProjectButton
