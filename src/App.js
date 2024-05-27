import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { Portfolio } from './Components/Portfolio';

function App() {
  return (
    <div>
        <Header />
        <Main/>
        <Portfolio/>
        <Footer/>
    </div>
  );
}

export default App;
