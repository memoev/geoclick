import React from 'react';
import Tech from './components/Tech';
import Nav from './components/Nav';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <header className="App-header">
        <Tech className="App"/>
      </header>
      <Footer />
    </>
  );
}

export default App;
