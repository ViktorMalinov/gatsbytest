import React from "react";
import Battery from "./ru-battery";
import Geolocation from "./ru-geolocation";
import MouseWheel from "./ru-mouse-wheel";
import * as styles from "./react-use-test.module.css";

const RUTest = () => {
  return (
    <>
      {/* <div className={styles?.divider} /> */}
      <MouseWheel className={styles?.divider} />
      <Battery className={styles?.divider} />
      <Geolocation className={styles?.divider} />
    </>
  );
};

export default RUTest;
