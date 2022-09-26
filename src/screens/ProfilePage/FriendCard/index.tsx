import React from "react";
import * as S from "./styles";

export default function FriendCard() {
  return (
    <S.FriendCard>
      <S.CardImageContainer>
        <S.CardImage
          source={{ uri: "https://dummyimage.com/100x100/000/fff" }}
        />
      </S.CardImageContainer>
      <S.DescriptionContainer>
        <S.FriendName>Ronaldo</S.FriendName>
        <S.FriendLevel>Doador diamante</S.FriendLevel>
      </S.DescriptionContainer>
      <S.DonationContainer>
        <S.FriendDonations>500</S.FriendDonations>
      </S.DonationContainer>
    </S.FriendCard>
  );
}
