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
      <View style={styles.dropZone}></View>
      <View style={styles.badgesContainer}>
        <Text style={styles.text}>Badges</Text>
        <FlatList
          data={userBadges}
          renderItem={({ item }) => (
            <View style={styles.badgeContainer}>
              <View
                style={[
                  styles.badgeCard,
                  {
                    opacity: item.claimed ? 1.0 : 0.4,
                    borderColor: item.claimed
                      ? theme.colors.ribonBlue
                      : theme.colors.darkGray,
                    borderStyle: item.claimed ? "solid" : "dashed",
                  },
                ]}
              >
                <Image source={{ uri: item.image }} style={styles.image} />
              </View>
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
    backgroundColor: theme.colors.ribonBlue,
  },
  badgesContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: theme.colors.ribonWhite,
    flex: 1,
    padding: 15,
  },
  badgeContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 35,
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
    height: 100,
  },
  text: {
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: theme.colors.ribonBlack,
    fontSize: 20,
    marginBottom: 15,
    fontWeight: "bold",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 70,
    marginVertical: 5,
  },
  badgeCard: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 50,
    width: 80,
    height: 80,
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
