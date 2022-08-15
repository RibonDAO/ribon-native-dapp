import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Platform, StyleSheet, TextInput } from "react-native";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../../types";
import useDonations from "../hooks/apiHooks/useDonations";
import { RIBON_INTEGRATION_ID } from "../constants/Application";

export default function ModalScreen({ route }: RootStackScreenProps<"Modal">) {
  const { nonProfit } = route.params;
  const [email, setEmail] = useState("");
  const { donate } = useDonations();

  async function handleDonateButtonPress() {
    try {
      await donate(RIBON_INTEGRATION_ID, nonProfit.id, email);
      setEmail("");
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coloque seu email para doar</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        textContentType="emailAddress"
      />
      <Text>Doar para {nonProfit.name}</Text>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <Button title="doar" onPress={handleDonateButtonPress} />
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
