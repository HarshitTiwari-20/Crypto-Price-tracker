import { useState } from 'react'
import Header from './components/common/Header/indexh';
import Footer from './components/common/Footer/indexf';
//import { Header  } from './components/common/Header'
//import {Footer } from './components/common/Footer'
import './App.css';
import MainComp from './components/Dashboard/MainComp';

function App() {
  

  return (
    
      <div className = "App" >
        <Header/>
        <MainComp/>
     </div>
    
  )
}

export default App;
