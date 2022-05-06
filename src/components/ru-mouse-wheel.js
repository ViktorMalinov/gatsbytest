import React from "react";
import { useMouseWheel } from "react-use";

const MouseWeel = ({ className }) => {
  const mouseWheel = useMouseWheel();
  return (
    <div className={className}>
      <h3>Mouse wheel delta Y Scrolled: {mouseWheel}</h3>
    </div>
  );
};

export default MouseWeel;
