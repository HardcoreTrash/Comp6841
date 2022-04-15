import React from "react";
import Divider from '@mui/material/Divider';

const OSSEC = () => {
    function onClick(link) {
        return function () {
            window.open(link);
        };
    }

    return (
        <div className='home-style'>
        <h1>OSSEC</h1>
        <div className='section-1'>
            <h2>What is OSSEC</h2>
            <Divider />
            <p>
            OSSEC is an Open Source Host based Intrusion Detection System. Its capabilities include log analysis, 
            integrity checking, Windows registry monitoring, rootkit detection, real-time alerting and active response.
            OSSEC also has a centralized, cross-platform architecture which allows multiple systems to be easily monitored and managed.
            </p>
            <p>
            OSSEC consists of a main application, an agent, and a web interface. The Manager (or server) is required for 
            distributed network or stand-alone installations. Whereas the Agent is a small program installed on the systems to be monitored.
            On the other hand there is an Agentless mode, that can be used to monitor firewalls, routers, and even Unix systems.
            </p>
        </div>
        <div className='section-1'>
            <h2>Features</h2>
            <Divider />
            <div className='list-style'>
                <li>
                Portable: Can be installed on Linux, OpenBSD, FreeBSD, Mac OS X, Solaris and Windows.
                </li>
                <li>
                    Log-based Intrusion Detection
                </li>
                <li>
                    Rootkit Detection
                </li>
                <li>
                    Malware Detection
                </li>
                <li>
                    Active Response
                </li>
                <li>
                    Compliance Auditing
                </li>
                <li>
                    File Integrity Monitoring
                </li>
                <li>
                    System Inventory
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Protection</h2>
            <Divider />
            <p>OSSEC offers protection against</p>
            <div className='list-style'>
                <li>
                Log-based Intrusion
                </li>
                <li>
                Rootkit
                </li>
                <li>
                Malware
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Extra Resources</h2>
            <Divider />
            <ul>
                <h4 onClick={onClick("https://www.ossec.net/ossec-downloads/")} className="link-hover">
                    Downloads
                </h4>
                <h4 onClick={onClick("https://www.ossec.net/docs/")} className="link-hover">
                    Documentation
                </h4>
                <h4 onClick={onClick("https://github.com/ossec")} className="link-hover">
                    GitHub Repository
                </h4>
            </ul>
        </div>
        </div>
    );
};
  
export default OSSEC;
