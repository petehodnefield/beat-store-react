import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Gallery from './components/Gallery';
import Home from './pages/Home';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';
import './styles.css'
import LoopLicense from './components/LoopLicense';



function App() {
  return (
    
    <Router>
      <div className="App">
            <Header></Header>
            <div>
            <Routes>
                <Route
                  path="/"
                  element={<Home></Home>}
                />
                <Route
                  path="loop-license"
                  element={<LoopLicense/>}
                />
              </Routes>    
            </div>
                                
            <Footer></Footer>

        
      </div>
    </Router>
 
  );
}

export default App;
