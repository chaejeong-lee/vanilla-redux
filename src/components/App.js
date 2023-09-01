import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Routes 추가
import Home from '../routes/Home';
import Detail from '../routes/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
