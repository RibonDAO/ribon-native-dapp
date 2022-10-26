import React, { Component, useEffect } from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import { useCurrentUser } from "../../contexts/currentUserContext";
import theme from "styles/theme";
import useBadges from "hooks/apiHooks/useBadges";

function ImpactPage() {
  const { currentUser } = useCurrentUser();
  const { userBadges } = useBadges();

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  useEffect(() => {
    console.log(userBadges);
  }, [userBadges]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.dropZone}>
        <Text style={styles.text}>Your Badges</Text>
      </View>
      <View>
        <FlatList
          data={userBadges}
          renderItem={({ item }) => (
            <View
              style={[styles.badgeCard, { opacity: item.claimed ? 1.0 : 0.3 }]}
            >
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.badgeText}>{item.name}</Text>
              <Text style={styles.badgeCategory}>{item.category}</Text>
            </View>
          )}
          numColumns={3}
        />
      </View>
    </View>
  );
}

export default ImpactPage;

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
    padding: 15,
    marginBottom: 15,
    backgroundColor: theme.colors.ribonBlue,
  },
  text: {
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginVertical: 5,
  },
  badgeCard: {
    alignItems: "center",
    display: "flex",
    flex: 1,
  },
  badgeText: {
    textAlign: "center",
    fontSize: 16,
  },
  badgeCategory: {
    fontWeight: "bold",
    marginBottom: 35,
    fontSize: 12,
  },
});
