import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Hacking from './pages/hacking';
import NavBar from "./components/NavBar";
// import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
          <Route exact path='/' exact element={<Home />} />
          <Route path='/hacking' element={<Hacking/>} />
      </Routes>
    </Router>
  );
}

export default App;
