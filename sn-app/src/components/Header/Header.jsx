import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return <header className={classes.header}>
        <img
            src="https://99designs-acquisition-frontend.imgix.net/serverless/images/categoryPage/hero/logo-design/04-artsigma.jpg?auto=format&w=300&h=300"
            className="App-logo" alt="logo"/>
    </header>
}

export default Header;