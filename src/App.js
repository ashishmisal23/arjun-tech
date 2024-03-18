import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Style/color.css';
import './Style/animation.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import ErrorMsg from './Components/ErrorMsg';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from '@vercel/analytics/react';

const App = () => {

  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/contact' element={<ContactUs />} />
        <Route path='/*' element={<ErrorMsg />} />

      </Routes>
      <SpeedInsights />
      <Analytics />
      <Footer />
    </Router>


  );
}

export default App;
