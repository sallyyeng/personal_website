import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'

import InputForm from './components/input_form';

import './index.css';
// import App from './App'; // following tutorial
import registerServiceWorker from './registerServiceWorker';

class App extends Component {

  render() {

    return (
      <Grid>
        <Grid.Column width={4}>
          <div><h1>Left Column</h1></div>
        </Grid.Column>

        <Grid.Column width={9}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={9}>
                <div><h1>Left Column</h1></div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={9}>
                <div><h1>Left Column</h1></div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid>
    )
  }
}

export default App
