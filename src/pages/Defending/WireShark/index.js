import React from "react";
import Divider from '@mui/material/Divider';

const WireShark = () => {
    function onClick(link) {
        return function () {
            window.open(link);
        };
    }

    return (
        <div className='home-style'>
        <h1>WireShark</h1>
        <div className='section-1'>
            <h2>What is WireShark</h2>
            <Divider />
            <p>
            Wireshark is a free and open-source packet analyzer which is used for network troubleshooting, analysis, 
            software and communications protocol development, and education. Wireshark is cross-platform, being able
            to run on Linux, macOS, BSD, Solaris, some other Unix-like operating systems, and Microsoft Windows.
            </p>
            <p>
            Wireshark has a graphical front-end and integrated sorting and filtering options.
            Wireshark lets the user put network interface controllers into promiscuous mode 
            so they can see all the traffic visible on that interface including unicast traffic not sent to that 
            network interface controller's MAC address. However, when capturing with a packet analyzer in promiscuous mode on 
            a port on a network switch, not all traffic through the switch is necessarily sent to the port where the capture 
            is done, so capturing in promiscuous mode is not necessarily sufficient to see all network traffic. Port mirroring 
            or various network taps extend capture to any point on the network. Simple passive taps are extremely resistant to tampering.
            </p>
        </div>
        <div className='section-1'>
            <h2>Features</h2>
            <Divider />
            <div className='list-style'>
                <li>
                    Deep inspection of hundreds of protocols, with more being added all the time
                </li>
                <li>
                    Live capture and offline analysis
                </li>
                <li>
                    Standard three-pane packet browser
                </li>
                <li>
                    Multi-platform: Runs on Windows, Linux, macOS, Solaris, FreeBSD, NetBSD, and many others
                </li>
                <li>
                    Captured network data can be browsed via a GUI, or via the TTY-mode TShark utility
                </li>
                <li>
                    The most powerful display filters in the industry
                </li>
                <li>
                    Rich VoIP analysis
                </li>
                <li>
                    Read/write many different capture file formats: tcpdump (libpcap), Pcap NG, Catapult DCT2000, Cisco Secure IDS iplog, 
                    Microsoft Network Monitor, Network General Sniffer® (compressed and uncompressed), Sniffer® Pro, and NetXray®, Network 
                    Instruments Observer, NetScreen snoop, Novell LANalyzer, RADCOM WAN/LAN Analyzer, Shomiti/Finisar Surveyor, Tektronix 
                    K12xx, Visual Networks Visual UpTime and WildPackets EtherPeek/TokenPeek/AiroPeek.
                </li>
                <li>
                    Capture files compressed with gzip can be decompressed on the fly
                </li>
                <li>
                    Live data can be read from Ethernet, IEEE 802.11, PPP/HDLC, ATM, Bluetooth, USB, Token Ring, Frame Relay, FDDI, and others (depending on your platform)
                </li>
                <li>
                    Decryption support for many protocols, including IPsec, ISAKMP, Kerberos, SNMPv3, SSL/TLS, WEP, and WPA/WPA2
                </li>
                <li>
                    Coloring rules can be applied to the packet list for quick, intuitive analysis
                </li>
                <li>
                    Output can be exported to XML, PostScript®, CSV, or plain text
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Installation guide</h2>
            <Divider />
            <h3>Kali Linux</h3>
            <p>This is a tool that can be used in Kali Linux. See Kali Linux installation <a href="/defending/kali-linux">here</a></p>
            <h3>Kali Linux Tool: Nikto</h3>
            <p>Install the code from <a href="https://www.kali.org/tools/wireshark/">here</a></p>
        </div>
        <div className='section-1'>
            <h2>Extra Resources</h2>
            <Divider />
            <ul>
                <h4 onClick={onClick("https://www.wireshark.org/download.html")} className="link-hover">
                    Downloads
                </h4>
                <h4 onClick={onClick("https://www.wireshark.org/docs/")} className="link-hover">
                    Documentation
                </h4>
                <h4 onClick={onClick("https://gitlab.com/wireshark/wireshark.git")} className="link-hover">
                    GitLab Repository
                </h4>
            </ul>
        </div>
        </div>
    );
};
  
export default WireShark;