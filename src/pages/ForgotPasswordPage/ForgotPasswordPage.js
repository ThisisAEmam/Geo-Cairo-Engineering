import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import LSPageTemp from "../../containers/LSPageTemp/LSPageTemp";
import classes from "./ForgotPasswordPage.module.css";

const ForgotPasswordPage = (props) => {
  const [email, setEmail] = useState("");
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [content, setContent] = useState(1);

  const loginBtnRef = useRef();
  const emailFieldRef = useRef();

  useEffect(() => {
    if (email.length !== 0) {
      setEmptyEmail(false);
    }
  }, [email]);

  const inputFocusHandler = () => {
    document.getElementById("email").addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        loginBtnRef.current.click();
      }
    });
  };

  const submitHandler = () => {
    if (email.length === 0) {
      setEmptyEmail(true);
    } else {
      setContent(2);
    }
  };

  return (
    <LSPageTemp fixedLogo>
      {content === 1 ? (
        <div className={classes.content}>
          <h1 className={classes.title}>Forgot Password?</h1>
          <p className={classes.text}>Enter your email address to reset your password</p>
          <input
            className={[classes.emailField, emptyEmail ? classes.emptyEmail : null].join(" ")}
            type="email"
            id="email"
            ref={emailFieldRef}
            value={email.length === 0 ? "" : email}
            onFocus={inputFocusHandler}
            placeholder="Enter your email"
            onChange={(text) => setEmail(text.target.value)}
          />
          <div className={classes.navButtons}>
            <Link to="/login" className={classes.backButton}>
              Back
            </Link>
            <p className={classes.submitButton} ref={loginBtnRef} onClick={submitHandler}>
              Send me a recovery link
            </p>
          </div>
        </div>
      ) : (
        <div className={classes.contentTwo}>
          <p className={classes.textTwo}>An email has been sent with the recovery link to you inbox.</p>
          <Link to="/" className={classes.backButtonTwo}>
            Back Home
          </Link>
        </div>
      )}
    </LSPageTemp>
  );
};

export default ForgotPasswordPage;
