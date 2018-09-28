import React from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'

export default class FileMenu extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='New project'
          active={activeItem === 'New project'}
          onClick={this.props.newProject}
        />
        <Menu.Item
          name='Save project'
          active={activeItem === 'Save project'}
          onClick={this.props.saveProject}
        />
        <Dropdown item text='Open project'>
          <Dropdown.Menu>
            <Dropdown.Item>asd</Dropdown.Item>
            <Dropdown.Item>asd</Dropdown.Item>
            <Dropdown.Item>asd</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </Menu>
    )
  }
}