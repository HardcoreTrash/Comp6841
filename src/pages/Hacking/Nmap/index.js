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
            Nmap, otherwise known as Network Mapper is a network scanner created by Gordon Lyon. This tool is used to discover hosts 
            and services on a computer network by sending packets and analyzing the responses. From this, Nmap provides a number of features 
            for probing computer networks, including host discovery and service and operating system detection. These features are 
            extensible by scripts that provide more advanced service detection, vulnerability detection, and other features. 
            A key feature of Nmap is that it is able adapt to network conditions including latency and congestion during a scan.

            </p>
        </div>
        <div className='section-1'>
            <h2>Features</h2>
            <Divider />
            <div className='list-style'>
                <li>
                    Portable: Can be installed on Linux, Microsoft Windows, FreeBSD, OpenBSD, Solaris, IRIX, Mac OS X, HP-UX, NetBSD, Sun OS, Amiga and BSD
                </li>
                <li>
                Host discovery: Identifying hosts on a network that respond to TCP and/or ICMP requests or have a particular port open.
                </li>
                <li>
                Port scanning: Enumerating the open ports on target hosts.
                </li>
                <li>
                Version detection: Interrogating network services on remote devices to determine application name and version number.
                </li>
                <li>
                TCP/IP stack fingerprinting: Determining the operating system and hardware characteristics of network devices 
                based on observations of network activity of said devices.
                </li>
                <li>
                Scriptable interaction with the target: Using Nmap Scripting Engine (NSE) and Lua programming language.
                </li>
                <li>
                Flexible: Supports dozens of advanced techniques for mapping out networks filled with IP filters, firewalls, routers, 
                and other obstacles. This includes many port scanning mechanisms (both TCP & UDP), OS detection, version detection, ping sweeps,
                </li>
                <li>
                Well Documented: Significant effort has been put into comprehensive and up-to-date man pages, whitepapers, tutorials, and a whole book.
                </li>
                <li>
                    Zenmap: Graphical user interface that develop visual mappings of a network for better usability and reporting.
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Usage</h2>
            <Divider />
            <p>The typical uses of Nmap are</p>
            <div className='list-style'>
                <li>
                    Nmap can provide further information on targets, including reverse DNS names, device types, and MAC addresses.
                </li>
                <li>
                    Auditing the security of a device or firewall by identifying the network connections which can be made to, or through it.
                </li>
                <li>
                    Identifying open ports on a target host in preparation for auditing.
                </li>
                <li>
                    Network inventory, network mapping, maintenance and asset management.
                </li>
                <li>
                    Auditing the security of a network by identifying new servers.
                </li>
                <li>
                    Generating traffic to hosts on a network, response analysis and response time measurement.
                </li>
                <li>
                    Finding and exploiting vulnerabilities in a network.
                </li>
                <li>
                    DNS queries and subdomain search
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Installation guide</h2>
            <Divider />
            <h3>Kali Linux</h3>
            <p>This is a tool that can be used in Kali Linux. See Kali Linux installation <a href="/defending/kali-linux">here</a></p>
            <h3>Kali Linux Tool: Nmap</h3>
            <p>Install the code from <a href="https://www.kali.org/tools/nmap/">here</a></p>
        </div>
        <div className='section-1'>
            <h2>Extra Resources</h2>
            <Divider />
            <ul>
                <h4 onClick={onClick("https://nmap.org/download.html")} className="link-hover">
                    Downloads
                </h4>
                <h4 onClick={onClick("https://nmap.org/book/man.html")} className="link-hover">
                    Documentation
                </h4>
                <h4 onClick={onClick("https://github.com/nmap")} className="link-hover">
                    GitHub Repository
                </h4>
                <h4 onClick={onClick("https://www.freecodecamp.org/news/what-is-nmap-and-how-to-use-it-a-tutorial-for-the-greatest-scanning-tool-of-all-time/")} className="link-hover">
                    Tutorial
                </h4>
            </ul>
        </div>
        </div>
    );
};
  
export default Nmap;