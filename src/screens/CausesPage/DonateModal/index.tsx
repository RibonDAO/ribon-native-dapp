import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, Image } from "react-native";
import { RootStackScreenProps } from "../../../../types";
import useDonations from "../../../hooks/apiHooks/useDonations";
import { RIBON_INTEGRATION_ID } from "../../../constants/Application";
import { useCurrentUser } from "../../../contexts/currentUserContext";
import useUsers from "../../../hooks/apiHooks/useUsers";
import Button from "components/atomics/Button";
import { showToast } from "../../../lib/Toast";

export default function DonateModal({
  route,
  navigation,
}: RootStackScreenProps<"DonateModal">) {
  const [isDonating, setIsDonating] = useState(false);
  const { nonProfit } = route.params;
  const { findOrCreateUser } = useUsers();
  const { setCurrentUser, currentUser } = useCurrentUser();
  const [email, setEmail] = useState(currentUser?.email || "");
  const { donate } = useDonations();

  async function handleDonateButtonPress() {
    setIsDonating(true);
    try {
      const user = await findOrCreateUser(email);
      setCurrentUser(user);
      await donate(RIBON_INTEGRATION_ID, nonProfit.id, email);
      setEmail("");
      showToast("Thanks for your donation!");
      navigation.pop();
    } catch (error) {
      showToast(error.response.data.formatted_message);
      console.log(error);
      console.log(error.response);
    } finally {
      setIsDonating(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text>You are donating to {nonProfit.name}</Text>
      <Image source={{ uri: nonProfit.mainImage }} style={styles.image} />
      <Text style={styles.title}>Place your email to donate</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        textContentType="emailAddress"
        autoFocus
      />
      <Button
        text="DONATE"
        onPress={handleDonateButtonPress}
        disabled={isDonating}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
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
    borderRadius: 8,
  },
  image: {
    borderRadius: 250,
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginVertical: 15,
  },
});
