import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <div className="App">
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register  />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
