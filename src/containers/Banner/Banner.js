import React from "react";
import classes from "./Banner.module.css";
import { useSpring, animated, config } from "react-spring";

const Banner = (props) => {
  const showup = useSpring({
    from: {
      transform: "translateY(-15%)",
    },
    transform: "translateY(0)",
    config: config.molasses,
  });

  return (
    <animated.div style={showup} className={classes.Banner}>
      <div className={classes.bg}>
        <img className={classes.BannerImg} src="/images/bg3.jpg" alt="bg" />
        <div className={classes.overlay}></div>
      </div>
    </animated.div>
  );
};

export default Banner;
