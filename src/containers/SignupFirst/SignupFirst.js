import React, { useState, useRef, useEffect } from "react";
import classes from "./SignupFirst.module.css";
import LoginSignupLower from "../../containers/LoginSignupLower/LoginSignupLower";
// import { useSpring, animated, config } from "react-spring";
import { useDispatch, useSelector } from "react-redux";
import { setSignupPage } from "../../features/signupPageSlice";
import { setSignupInfo } from "../../features/signupInfoSlice";

const SignupFirst = (props) => {
  const { signupPage, signupInfo } = useSelector((state) => state);

  const pageDispatch = useDispatch(setSignupPage);
  const infoDispatch = useDispatch(setSignupInfo);

  const [email, setEmail] = useState("");
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emptyConfirmPassword, setEmptyConfirmPassword] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);

  const loginBtnRef = useRef();
  const emailFieldRef = useRef();
  const passwordFieldRef = useRef();
  const confirmPasswordFieldRef = useRef();

  useEffect(() => {
    if (signupInfo.email.length !== 0) {
      setEmail(signupInfo.email);
    }

    if (signupInfo.password.length !== 0) {
      setPassword(signupInfo.password);
      setConfirmPassword(signupInfo.password);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  useEffect(() => {
    if (confirmPassword.length !== 0) {
      setEmptyConfirmPassword(false);
    }
  }, [confirmPassword]);

  const showPasswordHandler = (type) => {
    if (type === "password") {
      if (showPassword) {
        passwordFieldRef.current.type = "password";
        setShowPassword(false);
      } else {
        passwordFieldRef.current.type = "text";
        setShowPassword(true);
      }
    } else if (type === "confirmPassword") {
      if (showConfirmPassword) {
        confirmPasswordFieldRef.current.type = "password";
        setShowConfirmPassword(false);
      } else {
        confirmPasswordFieldRef.current.type = "text";
        setShowConfirmPassword(true);
      }
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
    if (signupPage === 0) {
      if (email.length === 0 || password.length === 0 || confirmPassword.length === 0) {
        if (email.length === 0) setEmptyEmail(true);
        if (password.length === 0) setEmptyPassword(true);
        if (confirmPassword.length === 0) setEmptyConfirmPassword(true);
      } else {
      }
    }

    const signupDict = { ...signupInfo };
    signupDict.email = email;
    signupDict.password = password;

    infoDispatch(setSignupInfo(signupDict));
    pageDispatch(setSignupPage(signupPage + 1));
  };

  const backHandler = () => {
    pageDispatch(setSignupPage(signupPage - 1));
  };

  return (
    <div className={classes.SignupFirst}>
      {/* <img className={classes.logo} src="/images/logo.png" alt="logo" /> */}
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
            placeholder="Enter your password (at least 8 characters)"
            onChange={(text) => setPassword(text.target.value)}
          />
          <span className={classes.eyeIcon} onClick={() => showPasswordHandler("password")}>
            {showPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
          </span>
          {/* <p>Your password is invalid.</p> */}
        </div>
        <div className={classes.passwordWithIcon}>
          <input
            className={[classes.confirmPasswordField, emptyConfirmPassword ? classes.emptyConfirmPassword : null].join(" ")}
            type="password"
            id="confirmPassword"
            ref={confirmPasswordFieldRef}
            value={confirmPassword.length === 0 ? "" : confirmPassword}
            onFocus={() => inputFocusHandler("confirmPassword")}
            placeholder="Comfirm your password"
            onChange={(text) => setConfirmPassword(text.target.value)}
          />
          <span className={classes.eyeIcon} onClick={() => showPasswordHandler("confirmPassword")}>
            {showConfirmPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
          </span>
          {/* <p>Your password is invalid.</p> */}
        </div>
        <div className={classes.navButtons}>
          <p className={[classes.backButton, signupPage === 1 ? classes.hidden : null].join(" ")} onClick={backHandler}>
            Back
          </p>
          <p className={classes.submitButton} ref={loginBtnRef} onClick={submitHandler}>
            Next
          </p>
        </div>
      </div>
      <LoginSignupLower />
    </div>
  );
};

export default SignupFirst;
