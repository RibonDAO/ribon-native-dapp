import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useCurrentUser } from "../../contexts/currentUserContext";
import useImpact from "hooks/apiHooks/useImpact";
import CardTopImage from "components/moleculars/CardTopImage";

export default function ProfilePage() {
  const { currentUser } = useCurrentUser();
  const { userImpact } = useImpact();

  useEffect(() => {
    console.log(currentUser, userImpact);
  }, [currentUser, userImpact]);

  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      <Text style={styles.title}>{currentUser?.email}</Text>
      <View style={styles.separator} />
      {userImpact && (
        <FlatList
          data={userImpact}
          keyExtractor={(item) => item.nonProfit.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginHorizontal: 8 }}>
              <CardTopImage
                imageUrl={item.nonProfit.logo}
                text={`You donated ${item.impact} ${item.nonProfit.impactDescription}`}
              />
            </View>
          )}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "center" }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 5 },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: "80%",
  },
});
