import React, { useCallback } from "react";
import useNonProfits from "hooks/apiHooks/useNonProfits";
import CardCenterImageButton from "components/moleculars/CardCenterImageButton";
import * as S from "./styles";
import { RootTabScreenProps } from "../../../types";
import CardStories from "components/moleculars/CardStories";

export default function CausesPage({ navigation }: RootTabScreenProps<any>) {
  const { nonProfits, isLoading } = useNonProfits();

  const stories = useCallback(() => {
    if (!nonProfits) return [];

    return nonProfits.map((nonProfit) => ({
      userId: nonProfit.id,
      userImage: nonProfit.logo,
      userName: nonProfit.name,
      stories: [
        {
          storyId: nonProfit.id,
          storyImage: nonProfit.backgroundImage,
          swipeText: `Swipe to donate to ${nonProfit.name}`,
          onPress: () => {
            navigation.navigate("ModalDonation", { nonProfit });
          },
        },
      ],
    }));
  }, [nonProfits]);

  return isLoading ? (
    <></>
  ) : (
    <S.Container>
      <CardStories userStories={stories()} />
      <S.CausesContainer>
        {nonProfits?.map((nonProfit, idx) => (
          <S.CausesCardContainer key={idx.toString()}>
            <CardCenterImageButton
              image={nonProfit.mainImage}
              title={`${nonProfit.impactByTicket} ${nonProfit.impactDescription}`}
              buttonText="Doar"
              onClickButton={() => {
                navigation.navigate("ModalDonation", { nonProfit });
              }}
            />
          </S.CausesCardContainer>
        ))}
      </S.CausesContainer>
    </S.Container>
  );
}
