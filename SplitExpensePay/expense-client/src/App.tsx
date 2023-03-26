import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ShowList from './components/ShowList';
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ShowList />} />
            <Route path="/home" element={<ShowList />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
