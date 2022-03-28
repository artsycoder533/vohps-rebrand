import React from "react";
import {BrowserRouter, Routes, Route}from 'react-router-dom';
import Home from "../../Pages/Home/Home";
import { GlobalStyle } from './style';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
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
