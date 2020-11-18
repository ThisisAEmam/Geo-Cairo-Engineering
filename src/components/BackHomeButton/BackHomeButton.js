import React from "react";
import classes from "./BackHomeButton.module.css";
import { Link } from "react-router-dom";

const BackHomeButton = (props) => {
  return (
    <Link to="/" className={classes.BackHomeButton}>
      <i className="fa fa-chevron-left"></i>
      <p>Back home</p>
    </Link>
  );
};

export default BackHomeButton;
