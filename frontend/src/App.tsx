import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Header from './components/header/Header';
import Section from './components/section/Section';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Section />
    </BrowserRouter>
  );
}

export default App;
