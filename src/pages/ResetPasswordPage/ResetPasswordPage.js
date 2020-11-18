import React, { useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LSPageTemp from "../../containers/LSPageTemp/LSPageTemp";
import classes from "./ResetPasswordPage.module.css";

const ResetPasswordPage = (props) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emptyConfirmPassword, setEmptyConfirmPassword] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);
  const [notMatched, setNotMatched] = useState(false);
  const [content, setContent] = useState(1);

  const loginBtnRef = useRef();
  const passwordFieldRef = useRef();
  const confirmPasswordFieldRef = useRef();

  const { id, token } = useParams();

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
    if (password.length === 0 || confirmPassword.length === 0) {
      if (password.length === 0) setEmptyPassword(true);
      if (confirmPassword.length === 0) setEmptyConfirmPassword(true);
    } else {
      if (password !== confirmPassword) setNotMatched(true);
      else setContent(2);
      console.log(id);
      console.log(token);
      console.log(notMatched);
    }
  };

  return (
    <LSPageTemp fixedLogo>
      {content === 1 ? (
        <div className={classes.content}>
          <h1 className={classes.title}>Reset Password</h1>
          <p className={classes.text}>Enter your new password</p>
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
              className={[classes.passwordField, emptyConfirmPassword ? classes.emptyPassword : null].join(" ")}
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
            <p className={classes.submitButton} ref={loginBtnRef} onClick={submitHandler}>
              Submit
            </p>
          </div>
        </div>
      ) : (
        <div className={classes.contentTwo}>
          <p className={classes.textTwo}>Your password has been changed successfully!</p>
          <Link to="/" className={classes.backButtonTwo}>
            Back Home
          </Link>
        </div>
      )}
    </LSPageTemp>
  );
};

export default ResetPasswordPage;
