import React from "react";
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import './Footer.css'
import { BsGithub } from "react-icons/bs"

export default function Footer() {
    return (
        <footer className="footer-style">
        <Box
            px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 10 }}
            bgcolor="text.secondary"
            color="white"
        >
            <Container maxWidth="lg">
            <div className="footer-logo">
                <img src={process.env.PUBLIC_URL + "/logo.png"} className="sec-logo"></img>
                <h1 className="navbar-logo"><i>CyberSecurity Tools</i></h1>
            </div>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Home</Box>
                {/* <Box>
                    <Link href="/" color="inherit">
                    Contact
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Support
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Privacy
                    </Link>
                </Box> */}
                </Grid>
                <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Account</Box>
                <Box>
                    <Link href="/" color="inherit">
                    Login
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Register
                    </Link>
                </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Messages</Box>
                <Box>
                    <Link href="/" color="inherit">
                    Backup
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    History
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Roll
                    </Link>
                </Box>
                </Grid>
            </Grid>
            <BsGithub className="git-logo"/>
            <Box textAlign="center" pt={{ xs: 5, sm: 5 }} pb={{ xs: 5, sm: 0 }}>
                &reg; {new Date().getFullYear()} CyberSecurity Tools. All rights reserved.
            </Box>
            </Container>
        </Box>
        </footer>
    );
}

// import React from 'react';
// import { makeStyles } from '@mui/material/styles';
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';

// const useStyles = makeStyles((theme) => ({
//     rootBox: {
//         [theme.breakpoints.down('md')]: {
//         justifyContent: 'center'
//         }
//     },
//     footerNav: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'center',
//         marginRight: 'auto',
//         marginLeft: theme.spacing(3),
//         marginBottom: theme.spacing(0),

//         [theme.breakpoints.down('md')]: {
//         width: '100%',
//         marginLeft: 'auto',
//         marginTop: theme.spacing(3),
//         marginBottom: theme.spacing(2),
//         }
//     },
//     footerLink: {
//         marginLeft: theme.spacing(3),
//         marginRight: theme.spacing(3),
//         [theme.breakpoints.down('md')]: {
//         marginBottom: theme.spacing(2),
//         }
//     },
//     }));

//     export default function Footer(props) {
//     const classes = useStyles();

//     const content = {
//         'brand': { image: `url('${process.env.PUBLIC_URL}/logo.png')`, width: 110 },
//         'copy': '© 2020 Nereus All rights reserved.',
//         'link1': 'First Link',
//         'link2': 'Second Link',
//         'link3': 'Third Link',
//         'link4': 'Fourth Link',
//         ...props.content
//     };

//     let brand;

//     if (content.brand.image) {
//         brand = <img src={ content.brand.image } alt="" width={ content.brand.width } />;
//     } else {
//         brand = content.brand.text || '';
//     }

//     return (
//         <footer>
//         <Container maxWidth="lg">
//             <Box py={6} display="flex" flexWrap="wrap" alignItems="center" className={classes.rootBox}>
//             <Link href="#" color="inherit" underline="none">
//                 {brand}
//             </Link>
//             <Box component="nav" className={classes.footerNav}>
//                 <Link href="#" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link1']}</Link>
//                 <Link href="#" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link2']}</Link>
//                 <Link href="#" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link3']}</Link>
//                 <Link href="#" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link4']}</Link>
//             </Box>
//             <Typography color="textSecondary" component="p" variant="caption" gutterBottom={false}>{content['copy']}</Typography>
//             </Box>
//         </Container>
//         </footer>
//     );
// }