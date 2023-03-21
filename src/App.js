import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News.js';
import Coin from './components/Coin/Coin';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

// eslint-disable-next-line
import {BrowserRouter as Router ,Route ,Routes } from 'react-router-dom';

function App() {
    return (
        
        <Router>
            
            <div>
            <Navbar />
                <Routes>  
                    <Route path="/" element={<Home/>} />
                    <Route path="/prices" element={<Coin/>} />
                    <Route path="/news" element={<News/>} />                   
                </Routes>
                <Footer />
            </div>
            
        </Router>   
        
        
    );
}

export default App;
