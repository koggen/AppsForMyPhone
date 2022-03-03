import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AddApp from './pages/AddApp';
import ViewApp from './pages/ViewApp';
import CssBaseline from '@mui/material/CssBaseline';
import { verifyAuth } from './redux/actions/userActions';
import './App.css';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyAuth());
  }, [ dispatch ]);

  return (
    <BrowserRouter>
      <CssBaseline />
      <div className="App">
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/add-app' element={<AddApp />} />
            <Route path='/:id' element={<ViewApp />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
