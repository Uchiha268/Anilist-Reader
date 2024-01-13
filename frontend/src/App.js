import logo from './logo.svg';
import './App.css';
import api from "./api/axiosConfig";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import fetch from './pages/Fetch';
import Fetch from './pages/Fetch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/fetch/:username/:type/:status" element={<Fetch/>}/>
    </Routes>
  );
}

export default App;
