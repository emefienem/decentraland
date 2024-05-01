"use client";
import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const ScrollFadeIn = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust according to when you want the animation to start
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(50px)",
    config: { mass: 1, tension: 280, friction: 30 },
  });

  return (
    <animated.div style={props} ref={ref}>
      {children}
    </animated.div>
  );
};

export default ScrollFadeIn;
