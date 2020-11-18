import React, { useState, useRef, useEffect } from "react";
import classes from "./LoginPage.module.css";
import { Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";
import LoginSignupLower from "../../containers/LoginSignupLower/LoginSignupLower";
import LSPageTemp from "../../containers/LSPageTemp/LSPageTemp";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);

  const loginBtnRef = useRef();
  const emailFieldRef = useRef();
  const passwordFieldRef = useRef();

  useEffect(() => {
    if (email.length !== 0) {
      setEmptyEmail(false);
    }
  }, [email]);

  useEffect(() => {
    if (password.length !== 0) {
      setEmptyPassword(false);
    }
  }, [password]);

  const showPasswordHandler = () => {
    if (showPassword) {
      passwordFieldRef.current.type = "password";
      setShowPassword(false);
    } else {
      passwordFieldRef.current.type = "text";
      setShowPassword(true);
    }
  };

  const inputFocusHandler = (type) => {
    document.getElementById(type).addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        loginBtnRef.current.click();
      }
    });
  };

  const submitHandler = () => {
    if (email.length === 0 || password.length === 0) {
      if (email.length === 0) {
        setEmptyEmail(true);
      } else {
        setEmptyEmail(false);
      }

      if (password.length === 0) {
        setEmptyPassword(true);
      } else {
        setEmptyPassword(false);
      }
    } else {
      if (email !== "test@test.test" || password !== "1234567") {
        setWrongCredentials(true);
      } else {
        setWrongCredentials(false);
        alert("Logged in!");
      }
    }
  };

  const showWrongCredentials = useSpring({
    opacity: wrongCredentials ? 1 : 0,
    config: config.gentle,
  });

  return (
    <LSPageTemp>
      <animated.div style={showWrongCredentials} className={classes.wrongCredentials}>
        <span>Wrong Credentials! </span> You have entered wrong email or password.
      </animated.div>
      <div className={classes.inputsContainer}>
        <input
          className={[classes.emailField, emptyEmail ? classes.emptyEmail : null].join(" ")}
          type="email"
          id="email"
          ref={emailFieldRef}
          value={email.length === 0 ? "" : email}
          onFocus={() => inputFocusHandler("email")}
          placeholder="Enter your email"
          onChange={(text) => setEmail(text.target.value)}
        />
        <div className={classes.passwordWithIcon}>
          <input
            className={[classes.passwordField, emptyPassword ? classes.emptyPassword : null].join(" ")}
            type="password"
            id="password"
            ref={passwordFieldRef}
            value={password.length === 0 ? "" : password}
            onFocus={() => inputFocusHandler("password")}
            placeholder="Enter your password"
            onChange={(text) => setPassword(text.target.value)}
          />
          <span className={classes.eyeIcon} onClick={showPasswordHandler}>
            {showPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
          </span>
        </div>
        <Link to="/forgotPassword" className={classes.forgetPassword}>
          Forget password?
        </Link>
        <p className={classes.submitButton} ref={loginBtnRef} onClick={submitHandler}>
          Log in
        </p>
      </div>
      <LoginSignupLower login />
    </LSPageTemp>
  );
};

export default LoginPage;
