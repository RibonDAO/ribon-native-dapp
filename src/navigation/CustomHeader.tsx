import React from "react";
import { View } from "react-native";
import RibonLogo from "components/vectors/RibonLogo";

function CustomHeader() {
  return (
    <View style={{ flex: 1, marginTop: 14 }}>
      <RibonLogo />
    </View>
  );
}

export default CustomHeader;
