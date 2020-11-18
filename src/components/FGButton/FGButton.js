import React from "react";
import classes from "./FGButton.module.css";

const FGButton = (props) => {
  return (
    <div className={[classes.FGButton, props.type === "facebook" ? classes.facebook : classes.google].join(" ")}>
      {props.type === "facebook" ? <i className="fa fa-facebook"></i> : <i className="fa fa-google"></i>}
      {props.type === "facebook" ? (
        <p className={classes.text}>{props.login ? "Log in" : "Sign up"} with Facebook</p>
      ) : (
        <p className={classes.text}>{props.login ? "Log in" : "Sign up"} with Google</p>
      )}
    </div>
  );
};

export default FGButton;
