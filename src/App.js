import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from './pages';
import Hacking from './pages/Hacking';
import Defending from './pages/Defending';
import Footer from './components/Footer'
import KaliLinux from './pages/Defending/KaliLinux';
import Keepass from './pages/Defending/Keepass';
import Metasploit from './pages/Hacking/Metasploit';
import Nikto from './pages/Defending/Nikto';
import Nmap from './pages/Hacking/Nmap';
import OpenVAS from './pages/Hacking/OpenVAS';
import OSSEC from './pages/Defending/OSSEC';
import SecurityOnion from './pages/Defending/SecurityOnion';
import VeraCrypt from './pages/Defending/VeraCrypt';

function App() {
  return (
    <div className="bg-colour">
      {/* 
      Add automatic Carousel that shows new
      https://darknetdiaries.com/
      https://risky.biz/
      */}
      <Router>
        <NavBar />
        <Routes>
            <Route exact path='/' exact element={<Home />} />
            <Route path='/hacking' element={<Hacking/>} />
            <Route path='/defending' element={<Defending/>} />
            <Route path='/defending/kali-linux' element={<KaliLinux/>} />
            <Route path='/defending/keepass' element={<Keepass/>} />
            <Route path='/defending/nikto' element={<Nikto/>} />
            <Route path='/defending/ossec' element={<OSSEC/>} />
            <Route path='/defending/security-onion' element={<SecurityOnion/>} />
            <Route path='/defending/veracrypt' element={<VeraCrypt/>} />

            <Route path='/defending/wireshark' element={<Defending/>} />
            <Route path='/defending/bitwarden' element={<Defending/>} />
            <Route path='/defending/netsparker' element={<Defending/>} />
            <Route path='/defending/cis' element={<Defending/>} />
            <Route path='/defending/snort' element={<Defending/>} />
            <Route path='/defending/w3af' element={<Defending/>} />
            
            <Route path='/hacking/metasploit' element={<Metasploit/>} />
            <Route path='/hacking/nmap' element={<Nmap/>} />
            <Route path='/hacking/openvas' element={<OpenVAS/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
    );
}

export default App;
