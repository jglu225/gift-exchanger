import React, { Component } from 'react';
import Hero from "./components/Hero.js"
import Features from "./components/Features.js"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero/>
        <Features/>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
