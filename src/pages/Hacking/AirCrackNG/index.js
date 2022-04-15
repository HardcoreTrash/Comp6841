import React from "react";
import Divider from '@mui/material/Divider';

const AirCrack = () => {
    function onClick(link) {
        return function () {
            window.open(link);
        };
    }

    return (
        <div className='home-style'>
        <h1>AirCrack</h1>
        <div className='section-1'>
            <h2>What is AirCrack</h2>
            <Divider />
            <p>
            Aircrack-ng is a network software suite consisting of a detector, packet sniffer, WEP and WPA/WPA2-PSK cracker and analysis tool 
            for 802.11 wireless LANs to assess WiFi network security. It works with any wireless network interface controller whose driver 
            supports raw monitoring mode and can sniff 802.11a, 802.11b and 802.11g traffic. The program can be installed and ran under multiple 
            platforms including Linux, FreeBSD, macOS, OpenBSD, NetBSD, Solaris, eComStation 2 and Windows.
            </p>
            <p>
            It focuses on different areas of WiFi security:
            </p>
            <div className='list-style'>
                <li>
                Monitoring: Packet capture and export of data to text files for further processing by third party tools
                </li>
                <li>
                Attacking: Replay attacks, de-authentication, fake access points and others via packet injection
                </li>
                <li>
                Testing: Checking WiFi cards and driver capabilities (capture and injection)
                </li>
                <li>
                Cracking: WEP and WPA PSK (WPA 1 and 2)
                </li>
            </div>
            <p>
            All tools are command line which allows for heavy scripting. A lot of GUIs have taken advantage of this feature.
            </p>
        </div>
        <div className='section-1'>
            <h2>Features</h2>
            <Divider />
            <p>The aircrack-ng software suite includes: </p>
            <div className='list-style'>
                <li>
                aircrack-ng: Cracks WEP keys using the Fluhrer, Mantin and Shamir (FMS) attack, PTW, Korek, 
                dictionary attacks, and WPA/WPA2-PSK using dictionary attacks.
                </li>
                <li>
                airdecap-ng: Decrypts WEP or WPA encrypted capture files with known key.
                </li>
                <li>
                airmon-ng: Places different cards in monitor mode.
                </li>
                <li>
                aireplay-ng: Packet injector (Linux, and Windows with CommView drivers).
                </li>
                <li>
                airodump-ng: Packet sniffer: Places air traffic into pcap or IVS files and shows information about networks.
                </li>
                <li>
                airtun-ng: Virtual tunnel interface creator.
                </li>
                <li>
                packetforge-ng: Creates encrypted packets for injection.
                </li>
                <li>
                ivstools: Tools to merge and convert.
                </li>
                <li>
                airbase-ng: Incorporates techniques for attacking client, as opposed to Access Points.
                </li>
                <li>
                airdecloak-ng: Removes WEP cloaking from pcap files.
                </li>
                <li>
                airolib-ng: Stores and manages ESSID and password lists and compute Pairwise Master Keys.
                </li>
                <li>
                airserv-ng: Allows to access the wireless card from other computers.
                </li>
                <li>
                buddy-ng: The helper server for easside-ng, run on a remote computer.
                </li>
                <li>
                easside-ng:	A tool for communicating to an access point, without the WEP key.
                </li>
                <li>
                tkiptun-ng:	WPA/TKIP attack tool.
                </li>
                <li>
                wesside-ng:	Automatic tool for WEP key recovery. 
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Installation guide</h2>
            <Divider />
            <h3>Kali Linux</h3>
            <p>This is a tool that can be used in Kali Linux. See Kali Linux installation <a href="/defending/kali-linux">here</a></p>
            <h3>Kali Linux Tool: AirCrack</h3>
            <p>Install the code from <a href="https://www.kali.org/tools/aircrack-ng/">here</a></p>
        </div>
        <div className='section-1'>
            <h2>Extra Resources</h2>
            <Divider />
            <ul>
                <h4 onClick={onClick("https://www.aircrack-ng.org/")} className="link-hover">
                    Downloads
                </h4>
                <h4 onClick={onClick("https://www.aircrack-ng.org/resources.html")} className="link-hover">
                    Documentation
                </h4>
                <h4 onClick={onClick("https://github.com/aircrack-ng/aircrack-ng")} className="link-hover">
                    GitHub Repository
                </h4>
            </ul>
        </div>
        </div>
    );
};
  
export default AirCrack;