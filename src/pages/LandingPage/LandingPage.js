import React from "react";
import Banner from "../../containers/Banner/Banner";
import Navbar from "../../containers/Navbar/Navbar";
import classes from "./LandingPage.module.css";

const LandingPage = (props) => {
  return (
    <div className={classes.LandingPage}>
      <Navbar />
      <Banner />
    </div>
  );
};

export default LandingPage;
