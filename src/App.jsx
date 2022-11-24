import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import './assets/css/global.css';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoutes component={Home} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
