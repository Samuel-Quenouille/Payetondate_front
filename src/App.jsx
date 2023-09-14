import { useState } from 'react'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import CreatePlace from './components/CreatePlace';
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';

export default function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createplace" element={<CreatePlace />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
