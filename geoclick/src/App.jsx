import React from 'react';
import Tech from './components/Tech';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <>
      <header className="App-header">
        <Nav />
        <Tech className="App"/>
      </header>
    </>
  );
}

export default App;
