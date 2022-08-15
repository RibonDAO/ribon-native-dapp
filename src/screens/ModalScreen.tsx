import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, TextInput, Text, View } from "react-native";
import { RootStackScreenProps } from "../../types";
import useDonations from "../hooks/apiHooks/useDonations";
import { RIBON_INTEGRATION_ID } from "../constants/Application";
import { useCurrentUser } from "../contexts/currentUserContext";
import useUsers from "../hooks/apiHooks/useUsers";
import Button from "components/atomics/Button";
import { showToast } from "../lib/Toast";

export default function ModalScreen({
  route,
  navigation,
}: RootStackScreenProps<"Modal">) {
  const { nonProfit } = route.params;
  const { findOrCreateUser } = useUsers();
  const { setCurrentUser, currentUser } = useCurrentUser();
  const [email, setEmail] = useState(currentUser?.email || "");
  const { donate } = useDonations();

  async function handleDonateButtonPress() {
    try {
      const user = await findOrCreateUser(email);
      setCurrentUser(user);
      await donate(RIBON_INTEGRATION_ID, nonProfit.id, email);
      setEmail("");
      navigation.pop();
    } catch (error) {
      showToast(error.response.data.formatted_message);
      console.log(error);
      console.log(error.response);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coloque seu email para doar</Text>
      <View style={styles.separator} />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        textContentType="emailAddress"
      />
      <Text>Doar para {nonProfit.name}</Text>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <Button text="donate" onPress={handleDonateButtonPress} />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
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
  input: {
    height: 40,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
