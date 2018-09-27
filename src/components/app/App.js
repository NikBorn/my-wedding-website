import React, { Component } from 'react';
import './App.css';
import FlipCardContainer from '../FlipCardContainer/FlipCardContainer';
import Intro from '../Intro/Intro';
import SectionsContainer from '../SectionsContainer/SectionsContainer';
import Nav from '../Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Intro/>
        <FlipCardContainer/>
        <SectionsContainer/>  
      </div>
    );
  }
}

export default App;
