import React from "react";
import classes from './Navbar.module.css';


const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}><a href="sn-app/src/components/Navbar/Navbar#">Profile</a>dfh</div>
        <div className={`${classes.item} ${classes.active}`}><a href="sn-app/src/components/Navbar/Navbar#">Messages</a>kgsh</div>
        <div className={classes.item}><a href="sn-app/src/components/Navbar/Navbar#">News</a></div>
        <div className={classes.item}><a href="sn-app/src/components/Navbar/Navbar#">Music</a></div>
        <div className={classes.item}><a href="sn-app/src/components/Navbar/Navbar#">Settings</a></div>
    </nav>
}

export default Navbar;