import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <Route path="/" component={App}/>
  </Router>,
  document.getElementById('root')
  );
