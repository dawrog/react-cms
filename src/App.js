import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = '#fff'
let defaultStyle = {
  color: defaultTextColor
  
};

class Aggregate extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img alt="filter"/>
        <input type="text"/>
      </div>
    );
  }
}

class Tiles extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: "25%", display: 'inline-block'}}>
      <img />
      <h3>Tile Name</h3>
      <ul><li>Work</li>Hobby<li></li><li>Contact</li></ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
    <div className="App">
        <h1>Title</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Tiles/>
      </div>
    );
  }
}

export default App;

