import React from "react";
import useNonProfits from "hooks/apiHooks/useNonProfits";
import CardCenterImageButton from "components/moleculars/CardCenterImageButton";
import * as S from "./styles";
import { RootTabScreenProps } from "../../../types";

export default function CausesPage({ navigation }: RootTabScreenProps<any>) {
  const { nonProfits, isLoading } = useNonProfits();

  return isLoading ? (
    <></>
  ) : (
    <S.Container>
      <S.CausesContainer>
        {nonProfits?.map((nonProfit, idx) => (
          <S.CausesCardContainer key={idx.toString()}>
            <CardCenterImageButton
              image={nonProfit.mainImage}
              infoTextLeft={nonProfit.name}
              infoTextRight={nonProfit.cause.name}
              imageDescription={`${nonProfit.impactByTicket} ${nonProfit.impactDescription}`}
              buttonText="Donate"
              onClickButton={() => {
                navigation.navigate("DonateModal", { nonProfit });
              }}
            />
          </S.CausesCardContainer>
        ))}
      </S.CausesContainer>
    </S.Container>
  );
}
