import React from "react";
import Battery from "./ru-battery";
import Geolocation from "./ru-geolocation";
import MouseWheel from "./ru-mouse-wheel";
import MediaDevices from "./ru-media-devices";
import * as styles from "./react-use-test.module.css";
import NetworkState from "./ru-network-state";
import WindowSize from "./ru-window-size";
import Audio from "./ru-audio";
import Video from "./ru-video";

const RUTest = () => {
  return (
    <>
      {/* <div className={styles?.divider} /> */}
      <MouseWheel className={styles?.divider} />
      <WindowSize className={styles?.divider} />
      <Audio className={styles?.divider} />
      <Video className={styles?.divider} />
      <Battery className={styles?.divider} />
      <Geolocation className={styles?.divider} />
      <MediaDevices className={styles?.divider} />
      <NetworkState className={styles?.divider} />
    </>
  );
};

export default RUTest;
