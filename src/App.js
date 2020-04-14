import React from 'react';
import './App.css';
import './css-vars.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navigation';
import Window from './components/window/Window';
import Footer from './components/footer/Footer';

function App(){
  return(
    <div className="main-app">
      <Header />
      <Navbar />
      <Window />
      <Footer />
    </div>
  )
}

export default App;