import React from "react";
import { View, FlatList } from "react-native";
import theme from "styles/theme";
import useBadges from "hooks/apiHooks/useBadges";
import FlipCard from "react-native-flip-card";
import * as S from "./styles";

function ImpactPage() {
  const { userBadges } = useBadges();

  return (
    <S.MainContainer>
      <S.InfoContainer>
        <View>
          <S.Title>5</S.Title>
          <S.Subtitle>badges</S.Subtitle>
        </View>
        <View>
          <S.Title>800</S.Title>
          <S.Subtitle>ribons</S.Subtitle>
        </View>
      </S.InfoContainer>
      <S.BadgesContainer>
        <FlatList
          data={userBadges}
          renderItem={({ item }) => (
            <FlipCard>
              {/* Face Side */}
              <S.BadgeContainer style={{ opacity: item.claimed ? 1.0 : 0.4 }}>
                <S.BadgeCard
                  style={{
                    borderColor: item.claimed
                      ? theme.colors.ribonBlue
                      : theme.colors.darkGray,
                    borderStyle: item.claimed ? "solid" : "dashed",
                  }}
                >
                  <S.BadgeImage source={{ uri: item.image }} />
                </S.BadgeCard>
                <S.BadgeText>{item.name}</S.BadgeText>
              </S.BadgeContainer>
              {/* Back Side */}
              <S.BadgeContainer
                style={{
                  opacity: item.claimed ? 1.0 : 0.4,
                }}
              >
                <S.BadgeText>{item.description}</S.BadgeText>
              </S.BadgeContainer>
            </FlipCard>
          )}
          numColumns={3}
        />
      </S.BadgesContainer>
    </S.MainContainer>
  );
}

export default ImpactPage;
