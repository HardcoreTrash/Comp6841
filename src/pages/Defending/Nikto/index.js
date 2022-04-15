import React from "react";
import Divider from '@mui/material/Divider';

const Nikto = () => {
    function onClick(link) {
        return function () {
            window.open(link);
        };
    }

    const firstList = [
        {description: 'Check the intended target system is vulnerable to an exploit for optimal attack.', key: 0},
        {description: 'Choosing and configuring an exploit (code that enters a target system by taking advantage of one of its bugs).', key: 1},
        {description: 'Choosing and configuring a payload (code that will be executed on the target system upon successful entry).', key: 2},
        {description: 'Choosing the encoding technique so that hexadecimal opcodes known as bad characters are removed from the payload, these characters will cause the exploit to fail.', key: 3},
        {description: 'Executing the exploit.', key: 3},
    ];

    return (
        <div className='home-style'>
        <h1>Nikto</h1>
        <div className='section-1'>
            <h2>What is Nikto</h2>
            <Divider />
            <p>
            Nikto is a open source web server and web application vulnerability scanner that scans and perform comprehensive tests 
            against webservers for dangerous files/CGIs, outdated server software and version-specific problems. It performs generic and 
            server type specific checks which include server configuration items such as the presence of multiple index files and HTTP server options
            , and will attempt to identify installed web servers and software.
            It also captures and prints any cookies received. Note that the Nikto code itself is free software, 
            but the data files it uses to drive the program are not.
            </p>
            <p>
            Nikto was written and maintained by Sullo, CIRT, Inc. It is written in Perl and was originally released in late 2001.
            </p>
        </div>
        <div className='section-1'>
            <h2>Features</h2>
            <Divider />
            <div className='list-style'>
                <li>
                Scan items and plugins are frequently updated and can be automatically updated. 
                </li>
                <li>
                Find SQL injection, XSS, and other common vulnerabilities
                </li>
                <li>
                Identify installed software (via headers, favicons, and files)
                </li>
                <li>
                Guess subdomains
                </li>
                <li>
                Includes support for SSL (HTTPS) websites
                </li>
                <li>
                Saves reports in plain text, XML, HTML or CSV
                </li>
                <li>
                “Fish” for content on web servers
                </li>
                <li>
                Report unusual headers
                </li>
                <li>
                Check for server configuration items like multiple index files, HTTP server options, and so on
                </li>
                <li>
                Has full HTTP proxy support
                </li>
                <li>
                Guess credentials for authorization (including many default username/password combinations)
                </li>
                <li>
                Is configured with a template engine to easily customize reports
                </li>
                <li>
                Exports to Metasploit
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Protection</h2>
            <Divider />
            <p>Nikto offers protection against</p>
            <div className='list-style'>
                <li>
                SQL injections
                </li>
                <li>
                XSS
                </li>
                <li>
                Dangerous files/CGIs
                </li>
                <li>
                Outdated server software and version-specific problems
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Installation guide</h2>
            <Divider />
            <h3>Kali Linux</h3>
            <p>This is a tool that can be used in Kali Linux. See Kali Linux installation <a href="/defending/kali-linux">here</a></p>
            <h3>Kali Linux Tool: Nikto</h3>
            <p>Install the code from <a href="https://www.kali.org/tools/nikto/">here</a></p>
        </div>
        <div className='section-1'>
            <h2>Extra Resources</h2>
            <Divider />
            <ul>
                <h4 onClick={onClick("https://cirt.net/Nikto2")} className="link-hover">
                    Downloads
                </h4>
                <h4 onClick={onClick("https://github.com/sullo/nikto/wiki")} className="link-hover">
                    Documentation
                </h4>
                <h4 onClick={onClick("https://github.com/sullo/nikto")} className="link-hover">
                    GitHub Repository
                </h4>
                <h4 onClick={onClick("https://www.freecodecamp.org/news/an-introduction-to-web-server-scanning-with-nikto/")} className="link-hover">
                    Tutorial
                </h4>
            </ul>
        </div>
        </div>
    );
};
  
export default Nikto;