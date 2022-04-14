import React from "react";
import {HashRouter, Routes, Route}from 'react-router-dom';
import Home from "../../Pages/Home/Home";
import Header from "../Header/Header";
import { GlobalStyle } from './style';
import Footer from "../Footer/Footer";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import TherapyServices from "../../Pages/TherapyServices/TherapyServices";
import Faqs from "../../Pages/Faq/Faqs";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<TherapyServices />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/faqs" element={<Faqs />}/>
        <Route path="*" />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
