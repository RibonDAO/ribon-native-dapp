import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import useNonProfits from "@ribon/shared/src/hooks/apiHooks/useNonProfits";

function GivingsPage() {
  const { nonProfits } = useNonProfits();

  useEffect(() => {
    console.log("asdasdasd,", nonProfits);
    console.log(process.env);
  }, [nonProfits]);

  return (
    <View style={styles.mainContainer}>
      {nonProfits &&
        nonProfits.map((nonProfit) => <Text>{nonProfit.name}</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default GivingsPage;
