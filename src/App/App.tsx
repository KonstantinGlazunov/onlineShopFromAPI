import React from 'react';
import './App.css';
import Products from './Products/Products';
import { Route, Routes } from 'react-router-dom';

function App() {

  Products();
  return (
    
    <Routes>
      <Route path="/" element={<Products />} />
            <Route path='p/:id' element={<Products />}/>
    </Routes>
  );
}

export default App;
