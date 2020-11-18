import React, { useRef, useEffect } from "react";
import classes from "./SignupSecond.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setSignupPage } from "../../features/signupPageSlice";
import SignupPlanCards from "../SignupPlanCards/SignupPlanCards";

const SignupSecond = (props) => {
  const { signupPage } = useSelector((state) => state);

  const dispatch = useDispatch(setSignupPage);
  const loginBtnRef = useRef();

  useEffect(() => {}, []);

  const submitHandler = () => {
    dispatch(setSignupPage(signupPage + 1));
  };

  const backHandler = () => {
    dispatch(setSignupPage(signupPage - 1));
  };

  return (
    <div className={classes.SignupSecond}>
      {/* <img className={classes.logo} src="/images/logo.png" alt="logo" /> */}
      <div className={classes.plans}>
        <p>Choose a plan</p>
        <SignupPlanCards />
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
  );
};

export default SignupSecond;
