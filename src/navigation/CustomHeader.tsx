import React from "react";
import { Image, View } from "react-native";
import RibonLogo from "../assets/icons/ribon-logo.png";

function CustomHeader() {
  return (
    <View style={{ flex: 1, marginTop: 14 }}>
      <Image style={{ width: 30, height: 30 }} source={RibonLogo} />
    </View>
  );
}

export default CustomHeader;
