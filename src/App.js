import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

import InputForm from './components/input_form';

import './index.css';
// import App from './App'; // following tutorial
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Button onClick={this.toggleVisibility}>
            <Icon name='align justify' />
          </Button>
          <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item >
              <Icon name='align justify' onClick={this.toggleVisibility}/>
            </Menu.Item>
            <Menu.Item name='home'>
              Home
            </Menu.Item>
            <Menu.Item name='blog'>
              Blog
            </Menu.Item>
            <Menu.Item name='user'>
              About
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>sally eng.ineer</Header>
              <InputForm />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default App
