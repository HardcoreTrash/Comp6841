import React from "react";
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import './Footer.css'
import { BsGithub } from "react-icons/bs"
import { useNavigate } from "react-router-dom";

export default function Footer() {
    function onClick(link) {
        return function() {
            window.open(link);
        }
    }

    let navigate = useNavigate(); 
    function routeChange(link) {
        return function() {
            navigate(link);
        }
    }

    return (
        <footer className="footer-style">
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor="text.secondary"
                color="white"
            >
                <Container maxWidth="lg">
                <div onClick={routeChange("/")} className="footer-logo">
                    <img src={process.env.PUBLIC_URL + "/logo.png"} className="sec-logo"></img>
                    <h1 className="navbar-logo"><i>CyberSecurity Tools</i></h1>
                </div>
                <Box component="nav" className="footerNav">
                    <Link href="/" variant="body1" color="textPrimary" className="footerLink">Home</Link>
                    <Link href="/hacking" variant="body1" color="textPrimary" className="footerLink">Hacking</Link>
                    <Link href="/defending" variant="body1" color="textPrimary" className="footerLink">Defending</Link>
                </Box>
                <div className='align-git'>
                    <BsGithub onClick={onClick("https://github.com/HardcoreTrash/Comp6841/tree/master")} className="git-logo"/>
                </div>
                <Box textAlign="center" pt={{ xs: 5, sm: 5 }} pb={{ xs: 5, sm: 0 }}>
                    &reg; {new Date().getFullYear()} CyberSecurity Tools. All rights reserved.
                </Box>
                </Container>
            </Box>
        </footer>
    );
}
