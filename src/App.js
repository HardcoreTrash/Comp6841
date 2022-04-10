import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from './pages';
import Hacking from './pages/Hacking';
import Defending from './pages/Defending';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
          <Route exact path='/' exact element={<Home />} />
          <Route path='/hacking' element={<Hacking/>} />
          <Route path='/defending' element={<Defending/>} />
      </Routes>
      <Footer />
    </Router>
    );
}

export default App;
