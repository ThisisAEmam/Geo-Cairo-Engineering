import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={classes.Navbar}>
      <div className={classes.container}>
        <Link className={classes.logo} to="/">
          <img src="images/logo.png" alt="logo" />
        </Link>
        <div className={classes.navlinks}>
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
