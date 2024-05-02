import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Form } from './new/new'
import { Home } from './home/home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="new" element={<Form/>}/>
        <Route path="" element = {<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
