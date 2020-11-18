import React from "react";
import Banner from "../../containers/Banner/Banner";
import classes from "./LandingPage.module.css";

const LandingPage = (props) => {
  return (
    <div className={classes.LandingPage}>
      <Banner />
    </div>
  );
};

export default LandingPage;
