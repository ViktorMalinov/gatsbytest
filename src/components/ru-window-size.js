import React from "react";
import { useWindowSize } from "react-use";

const WindowSize = ({ className }) => {
  const { width, height } = useWindowSize();

  return (
    <div className={className}>
      <div>Window width: {width}</div>
      <div>Window height: {height}</div>
    </div>
  );
};
export default WindowSize;
