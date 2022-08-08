import React, { useCallback, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../../types";
import CardStories from "components/moleculars/CardStories";
import useNonProfits from "hooks/apiHooks/useNonProfits";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const { nonProfits, isLoading } = useNonProfits();

  const stories = useCallback(() => {
    console.log("havanna", nonProfits);
    if (!nonProfits) return [];

    return nonProfits.map((nonProfit) => ({
      userId: nonProfit.id,
      userImage: nonProfit.logo,
      userName: nonProfit.name,
      stories: [
        {
          storyId: nonProfit.id,
          storyImage: nonProfit.backgroundImage,
          swipeText: `Swipe to donate to ${nonProfit.name}`,
          onPress: () => {
            navigation.navigate("ModalDonation", { nonProfit });
          },
        },
      ],
    }));
  }, [nonProfits]);

  return (
    <View style={styles.container}>
      {isLoading ? <Text>...</Text> : <CardStories userStories={stories()} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
