import React, { Component } from 'react';
import Hero from "./components/Hero.js";
import Features from "./components/Features.js";
import Wizard from "./components/Wizard.js"
import Participants from "./components/Participants";

import {Form} from "react-bootstrap";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero/>
        <Features/>
        <Wizard/>
      </div>
    );
  }
}

export default App;
