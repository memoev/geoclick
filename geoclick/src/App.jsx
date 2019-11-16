import React from 'react';
import Tech from './components/Tech';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <header className="App-header">
        <Tech className="App"/>
      </header>
    </>
  );
}

export default App;
