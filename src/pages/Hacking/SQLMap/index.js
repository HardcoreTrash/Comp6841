import React from "react";
import Divider from '@mui/material/Divider';

const SQLMap = () => {
    function onClick(link) {
        return function () {
            window.open(link);
        };
    }

    return (
        <div className='home-style'>
        <h1>SQLMap</h1>
        <div className='section-1'>
            <h2>What is SQLMap</h2>
            <Divider />
            <p>
            SQLMap is an open source penetration testing tool that automates the process of detecting and 
            exploiting SQL injection flaws and taking over of database servers. It comes with a powerful 
            detection engine, many niche features for the ultimate penetration tester, and a broad range of 
            switches including database fingerprinting, over data fetching from the database, accessing the 
            underlying file system, and executing commands on the operating system via out-of-band connections.
            </p>
        </div>
        <div className='section-1'>
            <h2>Installation guide</h2>
            <Divider />
            <h3>Kali Linux</h3>
            <p>This is a tool that can be used in Kali Linux. See Kali Linux installation <a href="/defending/kali-linux">here</a></p>
            <h3>Kali Linux Tool: SQLMap</h3>
            <p>Install the code from <a href="https://www.kali.org/tools/sqlmap/">here</a></p>
        </div>
        <div className='section-1'>
            <h2>Extra Resources</h2>
            <Divider />
            <ul>
                <h4 onClick={onClick("https://sqlmap.org/")} className="link-hover">
                    Downloads
                </h4>
                <h4 onClick={onClick("https://github.com/sqlmapproject/sqlmap/wiki")} className="link-hover">
                    Documentation
                </h4>
                <h4 onClick={onClick("https://github.com/sqlmapproject/sqlmap")} className="link-hover">
                    GitHub Repository
                </h4>
            </ul>
        </div>
        </div>
    );
};
  
export default SQLMap;