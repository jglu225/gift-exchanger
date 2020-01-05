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
      </div>
    );
  }
}

export default App;
