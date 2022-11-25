import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import './assets/css/global.css';
import 'toastr/build/toastr.min.css';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';
import ProductEdit from './pages/ProductEdit';
import ProductAdd from './pages/ProductAdd';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoutes component={Home} />} />
      <Route path="/product/:id" element={<ProtectedRoutes component={ProductDetails} />} />
      <Route path="/product/add" element={<ProtectedRoutes component={ProductAdd} />} />
      <Route path="/product/edit/:id" element={<ProtectedRoutes component={ProductEdit} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
