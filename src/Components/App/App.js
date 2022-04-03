import React from "react";
import {HashRouter, Routes, Route}from 'react-router-dom';
import Home from "../../Pages/Home/Home";
import Header from "../Header/Header";
import { GlobalStyle } from './style';
import Footer from "../Footer/Footer";

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" />
        <Route path="/faq" />
        <Route path="*" />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
