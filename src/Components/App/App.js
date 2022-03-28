import React from "react";
import {BrowserRouter, Routes, Route}from 'react-router-dom';
import Home from '../../Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" />
        <Route path="/faq" />
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
