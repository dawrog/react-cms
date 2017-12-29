import React, { Component } from "react"
import "./App.css"
import Header from "./components/Header"

/*
let defaultStyle = {
  color: '#fff'
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
      <div style={{...defaultStyle, display: 'inline-block', width: "25%"}}>
      <img alt="pic1"/>
      <h3>Tile Name</h3>
      <ul><li>Work</li>Hobby<li></li><li>Contact</li></ul>
      </div>
    );
  }
} 

class App extends Component {
  render() {
    return (
    <div className="App" style={{'text-align': 'center'}}>
        <h1 style={{...defaultStyle, 'font-size': '54px'}}>Title</h1>
        <Header />
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Tiles/>
      </div>
    );
  }
} */

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
			</div>
		)
	}
} 

export default App 

