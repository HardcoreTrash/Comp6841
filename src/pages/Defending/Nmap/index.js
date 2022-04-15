import React from "react";
import Divider from '@mui/material/Divider';

const Nmap = () => {
    function onClick(link) {
        return function () {
            window.open(link);
        };
    }

    return (
        <div className='home-style'>
        <h1>Nmap</h1>
        <div className='section-1'>
            <h2>What is Nmap</h2>
            <Divider />
            <p>
            
            </p>
        </div>
        <div className='section-1'>
            <h2>Features</h2>
            <Divider />
            <div className='list-style'>
                <li>
                Multi-platform support: Can be installed on Unix (including Linux and macOS) and on Windows.
                </li>
                <li>
                Auxiliary Modules: Includes hundreds of auxiliary modules that can perform scanning, fuzzing, and sniffing. There are three types of auxiliary modules namely scanners, admin and server modules. 
                </li>
                <li>
                Exploits: Tools used to take advantage of system weaknesses. Currently over 2074.
                </li>
                <li>
                Payloads: Sets of malicious code. Currently over 592.
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Exploits</h2>
            <Divider />
            <p>The platforms that can be exploited are</p>
            
        </div>
        <div className='section-1'>
            <h2>Installation guide</h2>
            <Divider />
            <h3>Kali Linux</h3>
            <p>This is a tool that can be used in Kali Linux. See Kali Linux installation <a href="/defending/kali-linux">here</a></p>
            <h3>Kali Linux Tool: Nmap</h3>
            <p>Install the code from <a href="https://www.kali.org/tools/Nmap-framework/">here</a></p>
        </div>
        <div className='section-1'>
            <h2>Extra Resources</h2>
            <Divider />
            <ul>
                <h4 onClick={onClick("https://github.com/rapid7/Nmap-framework/wiki/Nightly-Installers")} className="link-hover">
                    Downloads/Installation Guide
                </h4>
                <h4 onClick={onClick("https://Nmap.help.rapid7.com")} className="link-hover">
                    Documentation
                </h4>
                <h4 onClick={onClick("https://github.com/rapid7/Nmap-framework")} className="link-hover">
                    GitHub Repository
                </h4>
            </ul>
        </div>
        </div>
    );
};
  
export default Nmap;