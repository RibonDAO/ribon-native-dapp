import React, { useEffect } from "react";
import { useCurrentUser } from "../../contexts/currentUserContext";
import useImpact from "hooks/apiHooks/useImpact";
import RankIcon from "./assets/fire-rank.png";
import Avatar from "./assets/avatar.png";
import BackgroundImage from "./assets/background.png";
import Card from "./assets/card.png";
import Card2 from "./assets/card2.png";
import {
  Layout, useStyleSheet, StyleService, useTheme
} from "@ui-kitten/components";
import * as S from "./styles";
import { View, Text } from "react-native";

export default function ProfilePage() {
  const { currentUser } = useCurrentUser();
  const { userImpact } = useImpact();
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();

  useEffect(() => {
    console.log(currentUser, userImpact);
  }, [currentUser, userImpact]);

  return (
    <S.Container>
      <S.ScrollContainer>
        <S.BackgroundSection>
          <S.Background source={BackgroundImage} resizeMode="cover" />
          <S.RankImage source={RankIcon} />
          <S.AvatarImage source={Avatar} />
        </S.BackgroundSection>

        <S.ProgressBarContainer>
          <S.Nickname>Yan</S.Nickname>
          <S.ProgressBar></S.ProgressBar>
          <S.ProgressValue>0 / 20 doações</S.ProgressValue>
        </S.ProgressBarContainer>

        <Layout level="2" style={[styles.flexRow, styles.layoutItem]}>
          <View style={styles.item}>
            <Text children="348" center category="title3" status="white" />
            <Text children="Following" center category="caption1" status="snow" />
          </View>
          <Layout
            style={{ backgroundColor: theme["color-basic-1300"], width: 1 }}
          />
          <View style={styles.item}>
            <Text children="195" center category="title3" status="white" />
            <Text children="Followers" center category="caption1" status="snow" />
          </View>
          <Layout
            style={{ backgroundColor: theme["color-basic-1300"], width: 1 }}
          />
          <View style={styles.item}>
            <Text children="875" center category="title3" status="white" />
            <Text children="Loves" center category="caption1" status="snow" />
          </View>
        </Layout>

        <S.StreakSection>
          <S.StreakBox>
            <S.StreakValue>20</S.StreakValue>
            <S.StreakName>Perseverança</S.StreakName>
          </S.StreakBox>
          <S.StreakBox>
            <S.StreakValue>78</S.StreakValue>
            <S.StreakName>Total Doações</S.StreakName>
          </S.StreakBox>
          <S.StreakBox>
            <S.StreakValue>Ouro</S.StreakValue>
            <S.StreakName>Seu Rank</S.StreakName>
          </S.StreakBox>
        </S.StreakSection>

        <S.ActivitySection>
          <S.ActivityTitle>Atividade de doações</S.ActivityTitle>
          <S.ActivityTable
            borderStyle={{
              borderWidth: 2,
              borderColor: "#FFFFFF",
            }}
          >
            <S.ActivityRows
              data={[
                ["", "", "", "", "", "", ""],
                ["", "", "", "", "", "", ""],
                ["", "", "", "", "", "", ""],
                ["", "", "", "", "", "", ""],
              ]}
            />
          </S.ActivityTable>
        </S.ActivitySection>

        <S.ExploreSection>
          <S.ExploreTitle>Explore</S.ExploreTitle>
          <S.CardsCarousel>
            <S.ExploreCard>
              <S.ExploreBackground source={Card} />
              <S.CardTitle>Conquistas</S.CardTitle>
            </S.ExploreCard>
            <S.ExploreCard>
              <S.ExploreBackground source={Card2} />
              <S.CardTitle>Impacto</S.CardTitle>
            </S.ExploreCard>
          </S.CardsCarousel>
        </S.ExploreSection>
      </S.ScrollContainer>
    </S.Container>
  );
}

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  card01: {
    borderRadius: 12,
    marginHorizontal: 24,
    paddingVertical: 12,
    paddingLeft: 11,
    flexDirection: "row",
  },
  girl: {
    alignSelf: "center",
    marginTop: 30,
  },
  card02: {
    borderRadius: 12,
    marginHorizontal: 24,
    paddingVertical: 12,
    paddingLeft: 11,
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 120,
  },
  progressBar: {
    height: 8,
  },
  textCard: {
    marginLeft: 16,
    justifyContent: "space-between",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  item: {
    marginVertical: 22,
  },
  layoutItem: {
    borderRadius: 12,
    paddingHorizontal: 32,
    marginTop: 16,
    marginHorizontal: 24,
  },
  achieve: {
    marginTop: 44,
    paddingHorizontal: 24,
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 64,
    height: 64,
  },
  imgCard: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  hiThere: {
    width: 130,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginTop: 18,
    marginBottom: -44,
    marginRight: 20,
    paddingHorizontal: 12,
  },
});
