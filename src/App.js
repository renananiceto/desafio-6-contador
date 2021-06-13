import React, { Component } from 'react';


export default class App extends Component {
  state = {
    cont: 0
  }

  add = () => {
    if (this.state.cont < 10) {
      this.setState({
        cont: this.state.cont + 1
      })
    }
  }

  remuve = () => {
    if (this.state.cont > 0) {
      this.setState({
        cont: this.state.cont - 1
      })
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.add}>+</button>
        <p>{this.state.cont}</p>
        <button onClick={this.remuve} >-</button>
      </div>
    )
  }
}

