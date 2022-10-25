import React, { Component, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
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
        <Text style={styles.text}>Impact Page!</Text>
      </View>
      <View>
        {userBadges?.map((badge) => (
          <View>
            <Text>{badge.description}</Text>
            <Text>{badge.category}</Text>
            <Image source={{ uri: badge.image }} style={styles.image} />
          </View>
        ))}
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
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});
