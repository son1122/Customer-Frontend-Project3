import './App.css';
import React, { useState, useEffect } from "react"
import axios from "axios"
import Fruit from "./components/Fruits"
import Login from './components/Login/Login';
import Signup from "./components/Signup/Signup";
import {Route, Routes, Navigate} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {

  const [fruits, setFruits] = useState([])

  const getFruits = () => {
    console.log(localStorage.getItem("jwt"));
    axios.get('http://localhost:3001/customer', {
      headers: {Authorization: `Bearer ${localStorage.getItem("jwt")}`}
    })
    .then(res => {
      console.log(res.data);

    })
  }

  useEffect(() => {
    getFruits()
  }, [])

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={ <Navigate to="/login" /> } />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="*" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
