import React from 'react';
import './App.css';
import Products from './Products/Products';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

function App():JSX.Element {

  
  return (
    
    <Routes>
      <Route path='/' element={<Layout />} />
            <Route path='/p/' element={<Products />}/>
            <Route path='/p/:index' element={<Products />}/>
    </Routes>
  );
}

export default App;
