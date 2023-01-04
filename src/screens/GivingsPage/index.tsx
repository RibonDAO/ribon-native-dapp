import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "@ribon.io/shared/styles";
import { useNonProfits } from "@ribon.io/shared/hooks";

function GivingsPage() {
  const { nonProfits } = useNonProfits();

  useEffect(() => {
    console.log(theme);
    console.log(nonProfits);
  }, [theme]);

  return (
    <View style={styles.mainContainer}>
      <Text>Oi</Text>
    </View>
  );
}

export default GivingsPage;
let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.green40,
    height: 300,
    width: 300,
  },
  ballContainer: {
    height: 200,
  },
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
  },
  row: {
    flexDirection: "row",
  },
  dropZone: {
    height: 200,
    backgroundColor: theme.colors.ribonBlue,
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
});
