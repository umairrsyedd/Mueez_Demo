import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
export default function App() {
  return (
      <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="home" element={<Home />} />
      </Routes>
    </div>
  )
}
