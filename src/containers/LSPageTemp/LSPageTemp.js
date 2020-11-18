import React from "react";
import BackHomeButton from "../../components/BackHomeButton/BackHomeButton";
import classes from "./LSPageTemp.module.css";

const LSPageTemp = (props) => {
  return (
    <div className={classes.LSPageTemp}>
      <BackHomeButton />
      <div className={[classes.loginContainer, props.signup ? classes.reverse : null].join(" ")}>
        <div className={classes.rightSide}>
          <img src="/images/bg.jpg" alt="img" />
          <div className={classes.overlay}></div>
        </div>
        <div className={[classes.leftSide, props.fixedLogo ? classes.fixedLogo : null].join(" ")}>
          <img className={classes.logo} src="/images/logo.png" alt="logo" />
          <div className={classes.leftSideContainer}>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default LSPageTemp;
