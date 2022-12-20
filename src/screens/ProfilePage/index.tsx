import React, { useEffect } from "react";
import { useCurrentUser } from "../../contexts/currentUserContext";
import { useImpact } from "@ribon.io/shared";
import RankIcon from "./assets/fire-rank.png";
import Avatar from "./assets/avatar.png";
import BackgroundImage from "./assets/background.png";
import Card from "./assets/card.png";
import Card2 from "./assets/card2.png";
import * as S from "./styles";

export default function ProfilePage() {
  const { currentUser } = useCurrentUser();
  const { userImpact } = useImpact(currentUser?.id);

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
