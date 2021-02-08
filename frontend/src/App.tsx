import React from 'react';
import './App.css';
import RatesList from './components/RatesList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <section className="App-section">
        <RatesList></RatesList>
      </section>
    </div>
  );
}

export default App;
