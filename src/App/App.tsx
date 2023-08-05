import React from 'react';
import './App.css';
import Products from './Products/Products';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

function App() {

  Products();
  return (
    
    <Routes>
      <Route path="/" element={<Layout />} />
            <Route path='p/:id' element={<Products />}/>
    </Routes>
  );
}

export default App;
