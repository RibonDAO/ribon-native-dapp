import React from "react";
import { Image } from "react-native";
import RibonLogo from "../assets/icons/ribon-logo.png";

function CustomHeader() {
  return <Image style={{ width: 30, height: 30 }} source={RibonLogo} />;
}

export default CustomHeader;
