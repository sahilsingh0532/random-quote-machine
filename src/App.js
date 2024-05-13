import React from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Quote Machine</h1>
      </header>
      <main>
        <QuoteBox />
      </main>
      <h5>by Sahil</h5>
    </div>
  );
}

export default App;
