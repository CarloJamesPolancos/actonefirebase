import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import View from "./pages/View";
import About from "./pages/About";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import Services from './pages/Services';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer position="top-center" />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddEdit />} />
          <Route path='/update/:id' element={<AddEdit />} />
          <Route path='/view/:id' element={<View />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;