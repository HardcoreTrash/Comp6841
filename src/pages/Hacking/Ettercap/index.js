import React from "react";
import Divider from '@mui/material/Divider';

const Ettercap = () => {
    function onClick(link) {
        return function () {
            window.open(link);
        };
    }

    return (
        <div className='home-style'>
        <h1>Ettercap</h1>
        <div className='section-1'>
            <h2>What is Ettercap</h2>
            <Divider />
            <p>
            Ettercap is a free and open source network security tool primarily used for man-in-the-middle attacks on a LAN. It 
            can also be used for computer network protocol analysis and security auditing. Additionally, it is capable of intercepting 
            traffic on a network segment, capturing passwords, and conducting active eavesdropping against a number of common protocols.
            </p>
            <p>
            How Ettercap works is by putting the network interface into promiscuous mode and by ARP poisoning the 
            target machines, it can thereby act as a 'man in the middle' and unleash various attacks on the 
            victims.
            </p>
        </div>
        <div className='section-1'>
            <h2>Operations</h2>
            <Divider />
            <p>
            Ettercap offers four modes of operation:
            </p>
            <div className='list-style'>
                <li>
                IP-based: packets are filtered based on IP source and destination.
                </li>
                <li>
                MAC-based: packets are filtered based on MAC address, useful for sniffing connections through a gateway.
                </li>
                <li>
                ARP-based: uses ARP poisoning to sniff on a switched LAN between two hosts (full-duplex).
                </li>
                <li>
                PublicARP-based: uses ARP poisoning to sniff on a switched LAN from a victim host to all other hosts (half-duplex)..
                </li>
             </div>
        </div>
        <div className='section-1'>
            <h2>Features</h2>
            <Divider />
            <p>Ettercap supports active and passive dissection of many protocols and provides many features for network and host analysis. </p>
            <div className='list-style'>
                <li>
                    Portable: Available on Linux, Mac OS X, BSD and Solaris, and on Microsoft Windows.
                </li>
                <li>
                Character injection into an established connection: characters can be injected into a server 
                (emulating commands) or to a client (emulating replies) while maintaining a live connection.
                </li>
                <li>
                SSH1 support: the sniffing of a username and password, and even the data of an SSH1 
                connection in full duplex.
                </li>
                <li>
                HTTPS support: the sniffing of HTTP SSL secured data—even when the connection is made through a proxy.
                </li>
                <li>
                Remote traffic through a GRE tunnel: the sniffing of remote traffic through a GRE tunnel from a 
                remote Cisco router, and perform a man-in-the-middle attack on it.
                </li>
                <li>
                Plug-in support: Creation of custom plugins using Ettercap's API and features can be extended by adding new plugins.
                </li>
                <li>
                Password collectors for: TELNET, FTP, POP, IMAP, rlogin, SSH1, ICQ, SMB, MySQL, HTTP, NNTP, 
                X11, Napster, IRC, RIP, BGP, SOCKS 5, IMAP 4, VNC, LDAP, NFS, SNMP, MSN, YMSG
                </li>
                <li>
                Packet filtering/dropping: setting up a filter that searches for a particular string 
                (or hexadecimal sequence) in the TCP or UDP payload and replaces it with a custom string/sequence 
                of choice, or drops the entire packet.
                </li>
                <li>
                TCP/IP stack fingerprinting: determine the OS of the victim host and its network adapter.
                </li>
                <li>
                Kill a connection: killing connections of choice from the connections-list.
                </li>
                <li>
                Passive scanning of the LAN: retrieval of information about hosts on the LAN, their open ports, 
                the version numbers of available services, the type of the host (gateway, router or simple PC) and 
                estimated distances in number of hops.
                </li>
                <li>
                Hijacking of DNS requests.
                </li>
                <li>
                Ettercap also has the ability to actively or passively find other poisoners on the LAN. 
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Installation guide</h2>
            <Divider />
            <h3>Kali Linux</h3>
            <p>This is a tool that can be used in Kali Linux. See Kali Linux installation <a href="/defending/kali-linux">here</a></p>
            <h3>Kali Linux Tool: Ettercap</h3>
            <p>Install the code from <a href="https://www.kali.org/tools/ettercap/">here</a></p>
        </div>
        <div className='section-1'>
            <h2>Extra Resources</h2>
            <Divider />
            <ul>
                <h4 onClick={onClick("https://www.ettercap-project.org/downloads.html")} className="link-hover">
                    Downloads
                </h4>
                <h4 onClick={onClick("https://www.irongeek.com/i.php?page=backtrack-3-man/ettercap")} className="link-hover">
                    Documentation
                </h4>
                <h4 onClick={onClick("https://github.com/Ettercap/ettercap")} className="link-hover">
                    GitHub Repository
                </h4>
            </ul>
        </div>
        </div>
    );
};
  
export default Ettercap;