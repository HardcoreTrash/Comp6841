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
          <Route path='/defending/kali-linux' element={<Defending/>} />
          <Route path='/defending/keepass' element={<Defending/>} />
          <Route path='/defending/metasploit' element={<Defending/>} />
          <Route path='/defending/nikto' element={<Defending/>} />
          <Route path='/defending/nmap' element={<Defending/>} />
          <Route path='/defending/openvas' element={<Defending/>} />
          <Route path='/defending/ossec' element={<Defending/>} />
          <Route path='/defending/security-onion' element={<Defending/>} />
          <Route path='/defending/veracrypt' element={<Defending/>} />
          <Route path='/defending/wireshark' element={<Defending/>} />
          <Route path='/defending/bitwarden' element={<Defending/>} />
          <Route path='/defending/netsparker' element={<Defending/>} />
          <Route path='/defending/cis' element={<Defending/>} />
          <Route path='/defending/snort' element={<Defending/>} />
          <Route path='/defending/w3af' element={<Defending/>} />
      </Routes>
      <Footer />
    </Router>
    );
}

export default App;
