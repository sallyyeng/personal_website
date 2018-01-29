import React, { Component } from 'react';


class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return <input onChange={event => console.log(event.target.value)} />
  }
}

export default InputForm;
