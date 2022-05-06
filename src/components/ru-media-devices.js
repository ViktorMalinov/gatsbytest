import React from "react";
import { useMediaDevices } from "react-use";

const MediaDevices = ({ className }) => {
  const state = useMediaDevices();

  return <pre className={className}>{JSON.stringify(state, null, 2)}</pre>;
};

export default MediaDevices;
