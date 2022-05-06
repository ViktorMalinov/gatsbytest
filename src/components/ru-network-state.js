import React from "react";
import { useNetworkState } from "react-use";

const NetworkState = ({ className }) => {
  const state = useNetworkState();

  return <pre className={className}>{JSON.stringify(state, null, 2)}</pre>;
};

export default NetworkState;
