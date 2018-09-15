import React, { Component } from 'react';
import logo from '../resources/logo.png';
import '../styles/App.css';
import PersonList from './PersonList';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Lista de Personas</h1>
        </header>
        <celebridades/>
        <PersonList/>
      </div>
    );
  }
}

export default App;
