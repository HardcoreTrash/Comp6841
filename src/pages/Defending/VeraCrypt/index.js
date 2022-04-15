import React from "react";
import Divider from '@mui/material/Divider';

const VeraCrypt = () => {
    function onClick(link) {
        return function () {
            window.open(link);
        };
    }

    return (
        <div className='home-style'>
        <h1>VeraCrypt</h1>
        <div className='section-1'>
            <h2>What is VeraCrypt</h2>
            <Divider />
            <p>
            VeraCrypt is a free and open-source utility for on-the-fly encryption (OTFE). This means the software can create a 
            virtual encrypted disk that works just like a regular disk but within a file. It also has the function to encrypt a 
            partition or (in Windows) the entire storage device with pre-boot authentication.
            VeraCrypt has optimized the original cryptographic hash functions and ciphers, thereby boosting 
            performance on modern CPUs. 
            </p>
        </div>
        <div className='section-1'>
            <h2>Features</h2>
            <Divider />
            <div className='list-style'>
                <li>
                    Portable: Available in Windows XP, Windows Server, macOS, Linux and FreeBSD
                </li>
                <li>
                Personal Iterations Multiplier (PIM): Provides a parameter whose value is used to control the number
                 of iterations used by the header key derivation function, thereby making brute-force attacks potentially
                 even more difficult. 
                </li>
                <li>
                Has the capability to boot system partitions using UEF.
                </li>
                <li>
                Multiple language support: Available in 37 languages
                </li>

                <li>
                RAM encryption for keys and passwords on 64-bit systems
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Encryption scheme</h2>
            <Divider />
            <p>VeraCrypt employs AES, Serpent, Twofish, Camellia, and Kuznyechik as ciphers:</p>
            <div className='list-style'>
                <li>
                AES–Twofish
                </li>
                <li>
                AES–Twofish–Serpent
                </li>
                <li>
                Camellia–Kuznyechik
                </li>
                <li>
                Camellia–Serpent
                </li>
                <li>
                Kuznyechik–AES
                </li>
                <li>
                Kuznyechik–Serpent–Camellia
                </li>
                <li>
                Kuznyechik–Twofish
                </li>
                <li>
                Serpent–AES
                </li>
                <li>
                Serpent–Twofish–AES
                </li>
                <li>
                Twofish–Serpent
                </li>
            </div>
            <p>The cryptographic hash functions available for use are:</p>
            <div className='list-style'>
                <li>
                RIPEMD-160
                </li>
                <li>
                SHA-256
                </li>
                <li>
                SHA-512
                </li>
                <li>
                Streebog
                </li>
                <li>
                Whirlpool
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Security precautions</h2>
            <Divider />
            <p>There are still attacks in which software-based disk encryption is still vulnerable to:</p>
            <div className='list-style'>
                <li>
                Encryption keys stored in memory:
                VeraCrypt stores its keys in RAM so even if there is some degradation in the memory contents, 
                various algorithms may be able to recover the keys. This method, known as a cold boot attack (which 
                would apply in particular to a notebook computer obtained while in power-on, suspended, or screen-locked mode), 
                was successfully used to attack a file system protected by TrueCrypt. To counter this, VeraCrypt added the 
                option of encrypting the in-RAM keys and passwords on x64 editions of Windows and the option of erasing all 
                encryption keys from memory when a new device is connected.
                </li>
                <li>
                Tampered hardware:
                VeraCrypt is unable to secure data on a computer if an attacker has physically accessed it and has used VeraCrypt on the 
                compromised computer. The attacker having physical access to a computer can, for example, install a hardware or a software 
                keylogger, a bus-mastering device capturing memory or 
                install any other malicious hardware or software, allowing the attacker to capture unencrypted data (including 
                encryption keys and passwords) or to decrypt encrypted data using captured passwords or encryption keys. Therefore, 
                an important note is that physical security is a basic premise of a secure system.
                </li>
                <li>
                Trusted Platform Module:
                VeraCrypt does not take advantage of Trusted Platform Module (TPM) which means that the 
                exclusive purpose of the TPM is "to protect against attacks that require the attacker to have administrator privileges, 
                or physical access to the computer". Remember that the attacker who has physical or administrative access to a computer can circumvent 
                TPM, e.g., by installing a hardware keystroke logger, by resetting TPM, or by capturing memory contents and retrieving 
                TPM-issued keys. Therefore, TPM is entirely redundant as after achieving either unrestricted physical access or administrative 
                privileges, it is only a matter of time before other security measures in place are bypassed. TPM can, however, stop the cold boot 
                attack described above mentioned previously.
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Extra Resources</h2>
            <Divider />
            <ul>
                <h4 onClick={onClick("https://www.veracrypt.fr/code/VeraCrypt/")} className="link-hover">
                    Downloads
                </h4>
                <h4 onClick={onClick("https://www.veracrypt.fr/en/Documentation.html")} className="link-hover">
                    Documentation
                </h4>
                <h4 onClick={onClick("https://github.com/veracrypt/VeraCrypt")} className="link-hover">
                    GitHub Repository
                </h4>
            </ul>
        </div>
        </div>
    );
};
  
export default VeraCrypt;