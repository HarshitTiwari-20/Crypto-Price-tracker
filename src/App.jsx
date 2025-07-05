import { useState } from 'react'
import Header from './components/common/Header/indexh';
import Footer from './components/common/Footer/indexf';
//import { Header  } from './components/common/Header'
//import {Footer } from './components/common/Footer'
import './App.css';
import MainComp from './components/Dashboard/MainComp';
import HomePage from './pages/Home';
import DBpage from './pages/dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DBpage />} />
          {/* <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/watchlist" element={<WatchlishPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
