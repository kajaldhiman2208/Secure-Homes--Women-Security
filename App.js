import React from 'react';
import {BrowserRouter,Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Signup from './components/signup';
import PanicButton from './components/PanicButton';
import Healthtracker from './components/healthtracker';

function App() {
  return (
    <>
      {/* <Healthtracker/>  */}
      {/* <Signup/> */}
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path='/Signup' element={<Signup></Signup>} /> 
        <Route path='/Healthtracker' element={<Healthtracker></Healthtracker>} />
        <Route path='/PanicButton' element={<PanicButton></PanicButton>} />
      </Routes>
</BrowserRouter>

    </>
  );
}

export default App;
