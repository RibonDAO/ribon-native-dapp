import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useCurrentUser } from "../../contexts/currentUserContext";

export default function ProfilePage() {
  const { currentUser } = useCurrentUser();

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{currentUser?.email}</Text>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
