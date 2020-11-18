import React, { useState, useEffect } from "react";
// import classes from "./SignupPage.module.css";
import SignupFirst from "../../containers/SignupFirst/SignupFirst";
import SignupSecond from "../../containers/SignupSecond/SignupSecond";
import { useSelector } from "react-redux";
import LSPageTemp from "../../containers/LSPageTemp/LSPageTemp";

const SignupPage = (props) => {
  const { signupPage } = useSelector((state) => state);

  const [content, setContent] = useState(null);

  useEffect(() => {
    switch (signupPage) {
      case 1:
        setContent(<SignupFirst />);
        break;
      case 2:
        setContent(<SignupSecond />);
        break;

      default:
        break;
    }
  }, [signupPage]);

  return <LSPageTemp signup>{content}</LSPageTemp>;
};

export default SignupPage;
