import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NewContact from './components/newContact';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/newContact" element={<NewContact/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
