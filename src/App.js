import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleTabs from './components/tabs'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="app-body">
        <SimpleTabs />
      </div>
    </div>
  );
}

export default App;
