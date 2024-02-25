import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Style/color.css';
import './Style/animation.css';
import Header from './Componants/Header';
import Home from './Componants/Home';
import About from './Componants/About';
import Services from './Componants/Services';
import ContactUs from './Componants/ContactUs';
import Footer from './Componants/Footer';
import ErrorMsg from './Componants/ErrorMsg';

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

      <Footer />
    </Router>


  );
}

export default App;
