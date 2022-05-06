import React from "react";
import { useGeolocation } from "react-use";

const Geolocation = ({ className }) => {
  const state = useGeolocation();

  return <pre className={className}>{JSON.stringify(state, null, 2)}</pre>;
};

export default Geolocation;
