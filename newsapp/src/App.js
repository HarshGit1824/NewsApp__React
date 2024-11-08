import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default class App extends Component {

  render() {
    return (
      <div>
          <NavBar/>   
          <News pageSize={5} country='us' category="Science"/> 
      </div>
    )
  }
}



