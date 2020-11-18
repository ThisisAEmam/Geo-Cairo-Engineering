import React, { useEffect, useState } from "react";
import classes from "./SignupPlanCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setSignupInfo } from "../../features/signupInfoSlice";

const SignupPlanCard = (props) => {
  const { signupInfo } = useSelector((state) => state);

  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (signupInfo.plan === props.planName) {
      setSelected(true);
    } else {
      setSelected(false);
    }

    if (signupInfo.plan === "" && props.planName === "Free") {
      setSelected(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signupInfo]);

  const dispatch = useDispatch(setSignupInfo);

  const clickHandler = () => {
    setSelected(true);

    const signupDict = { ...signupInfo };
    signupDict.plan = props.planName;

    dispatch(setSignupInfo(signupDict));
  };

  return (
    <div className={[classes.SignupPlanCard, selected ? classes.selected : null].join(" ")} onClick={clickHandler}>
      <h3 className={classes.planName}>{props.planName}</h3>
      <p className={classes.price}>
        {props.price} <span>EGP/mo</span>
      </p>
      <ul className={classes.features}>
        {props.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default SignupPlanCard;
