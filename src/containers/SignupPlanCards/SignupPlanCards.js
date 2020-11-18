import React from "react";
import classes from "./SignupPlanCards.module.css";
import data from "./data.js";
import SignupPlanCard from "../../components/SignupPlanCard/SignupPlanCard";

const SignupPlanCards = (props) => {
  return (
    <div className={classes.SignupPlanCards}>
      {data.map((item, i) => (
        <SignupPlanCard
          key={i}
          planName={item.planName}
          price={item.price}
          discount={item.discount}
          priceBefore={item.priceBeforeDiscount}
          features={item.features}
        />
      ))}
    </div>
  );
};

export default SignupPlanCards;
