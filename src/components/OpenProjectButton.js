import React from 'react'
import { Dropdown, Button, Icon } from 'semantic-ui-react'

const OpenProjectButton = (props) => {
  return (
    <Dropdown item text='Projects'>
      <Dropdown.Menu>
        {
          props.projects.map(project =>
            <Dropdown.Item
              key={`project-${project.id}`}>
              {`${project.name}   `}
              <Button.Group attached='right'>
                <Button onClick={() => props.openProject(project)}>open</Button>
                <Button negative onClick={() => props.deleteProject(project)}>delete</Button>
              </Button.Group>
            </Dropdown.Item>
          )}
      </Dropdown.Menu>
    </Dropdown>)
}

export default OpenProjectButton
