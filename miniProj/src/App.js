import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
