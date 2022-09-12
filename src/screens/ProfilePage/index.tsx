import React, { useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { useCurrentUser } from "../../contexts/currentUserContext";
import useImpact from "hooks/apiHooks/useImpact";
import CardTopImage from "components/moleculars/CardTopImage";
import * as S from "./styles";
import FriendCard from "./FriendCard";

export default function ProfilePage() {
  const { currentUser } = useCurrentUser();
  const { userImpact } = useImpact();

  useEffect(() => {
    console.log(currentUser, userImpact);
  }, [currentUser, userImpact]);

  return (
    <S.Container>
      <S.Separator />
      <S.UserDataSection>
        <S.UserProfileImage
          source={{ uri: "https://dummyimage.com/100x100/000/fff" }}
        />
        <S.Email>Yan Galli</S.Email>
        <S.UserLevel>Doador ouro</S.UserLevel>
        <S.UserDonations>Dias doados: 326</S.UserDonations>
      </S.UserDataSection>

      <S.Separator />

      <S.FriendsSection>
        <S.Title>Seus amigos doadores:</S.Title>
        <S.FriendCards>
          <FriendCard />
        </S.FriendCards>
      </S.FriendsSection>

      {userImpact && (
        <FlatList
          data={userImpact}
          keyExtractor={(item) => item.nonProfit.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginHorizontal: 8 }}>
              <CardTopImage
                imageUrl={item.nonProfit.logo}
                text={`You donated ${item.impact} ${item.nonProfit.impactDescription}`}
              />
            </View>
          )}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "center" }}
        />
      )}
    </S.Container>
  );
}
