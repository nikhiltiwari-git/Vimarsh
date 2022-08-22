import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import News from './components/News';
import Prices from './components/Prices';
import Home from './components/Home';
// eslint-disable-next-line
import {BrowserRouter as Router ,Route ,Routes } from 'react-router-dom';

function App() {
    return (
        
        <Router>
            
            <div>
            <Navbar />
                <Routes>  
                    <Route path="/" element={<Home/>} />
                    <Route path="/prices" element={<Prices/>} />
                    <Route path="/news" element={<News/>} />
                    <Route path="/chat" element={<Chat/>} /> 

                   
                </Routes>
            </div>
            
        </Router>   
        
        
    );
}

export default App;
