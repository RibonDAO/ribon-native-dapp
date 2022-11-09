import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { RootStackScreenProps } from "../../../../types";
import useDonations from "../../../hooks/apiHooks/useDonations";
import { RIBON_INTEGRATION_ID } from "../../../constants/Application";
import { useCurrentUser } from "../../../contexts/currentUserContext";
import useUsers from "../../../hooks/apiHooks/useUsers";
import Button from "components/atomics/Button";
import { showToast } from "../../../lib/Toast";
import * as S from "./styles";
import { LinearGradient } from "expo-linear-gradient";

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
    } catch (error: any) {
      showToast(error.response.data.formatted_message);
      console.log(error);
      console.log(error.response);
    } finally {
      setIsDonating(false);
      navigation.pop();
    }
  }

  return (
    <S.ModalWrapper>
      <S.NonProfitContainer>
        <S.NonProfitText>
          You are donating to {"\n"}
          <S.NonProfitHighlight>{nonProfit.name}</S.NonProfitHighlight>
          {"\n"}
          {nonProfit.impactByTicket}
          {nonProfit.impactDescription}
        </S.NonProfitText>
        <S.Logo source={{ uri: nonProfit.mainImage }} />
        <LinearGradient
          colors={["rgb(0, 218, 147)", "transparent"]}
          start={[0.0, 0.5]}
          end={[1.0, 0.5]}
          locations={[0.0, 1.0]}
          style={S.inline.gradient}
        />
      </S.NonProfitContainer>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <S.Container>
            <S.InputEmailContainer>
              <S.Description>
                Hey! It looks like you're donating for the first time. Enter
                your email address to proceed.
              </S.Description>

              <S.Title>Place your e-mail to donate</S.Title>
              <S.Input
                placeholder="Place your email"
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
                autoCapitalize="none"
                textContentType="emailAddress"
                autoFocus
              />
              <S.InputHint>All your data is safe on Ribon.</S.InputHint>
            </S.InputEmailContainer>

            <S.ButtonContainer>
              <Button
                text="Donate"
                onPress={handleDonateButtonPress}
                disabled={isDonating}
              />
            </S.ButtonContainer>
          </S.Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <S.Footer>
        <S.FooterText>(c) Ribon {new Date().getFullYear()}</S.FooterText>
      </S.Footer>
    </S.ModalWrapper>
  );
}
