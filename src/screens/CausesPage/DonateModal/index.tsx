import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, Image } from "react-native";
import { RootStackScreenProps } from "../../../../types";
import useDonations from "../../../hooks/apiHooks/useDonations";
import { RIBON_INTEGRATION_ID } from "../../../constants/Application";
import { useCurrentUser } from "../../../contexts/currentUserContext";
import useUsers from "../../../hooks/apiHooks/useUsers";
import Button from "components/atomics/Button";
import { showToast } from "../../../lib/Toast";
import * as S from "./styles";

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
    } finally {
      setIsDonating(false);
    }
  }

  return (
    <S.Container>
      <S.DonatingText>You are donating to {nonProfit.name}</S.DonatingText>
      <S.DonatingImage source={{ uri: nonProfit.mainImage }} />
      <S.PlaceEmailText>Place your email to donate</S.PlaceEmailText>
      <S.Input
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
    </S.Container>
  );
}
