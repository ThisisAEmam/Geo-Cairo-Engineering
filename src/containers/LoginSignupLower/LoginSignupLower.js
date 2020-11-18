import React from "react";
import classes from "./LoginSignupLower.module.css";
import FGButton from "../../components/FGButton/FGButton";
import { Link } from "react-router-dom";

const LoginSignupLower = (props) => {
  return (
    <div className={classes.LoginSignupLower}>
      <p className={classes.or}>or</p>
      <div className={classes.socialMediaButtons}>
        <FGButton type="facebook" login={props.login ? true : false} />
        <FGButton type="google" login={props.login ? true : false} />
      </div>
      <div className={classes.noAccount}>
        {props.login ? (
          <h4>
            Not a member yet?{" "}
            <Link to="/signup" className={classes.signupButton}>
              Sign up now
            </Link>
          </h4>
        ) : (
          <h4>
            Already a member?{" "}
            <Link to="/login" className={classes.signupButton}>
              Log in now
            </Link>
          </h4>
        )}
      </div>
    </div>
  );
};

export default LoginSignupLower;
