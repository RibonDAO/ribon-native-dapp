import React from "react";
import useNonProfits from "../../hooks/apiHooks/useNonProfits";
import CardCenterImageButton from "../../components/moleculars/CardCenterImageButton";
import * as S from "./styles";

export default function CausesPage() {
  const { nonProfits, isLoading } = useNonProfits();

  return (
    <S.Container>
      <S.CausesContainer>
        {nonProfits?.map((nonProfit, idx) => (
          <S.CausesCardContainer key={idx.toString()}>
            <CardCenterImageButton
              image={nonProfit.mainImage}
              title={`${nonProfit.impactByTicket} ${nonProfit.impactDescription}`}
              buttonText="Doar"
              onClickButton={() => {}}
            />
          </S.CausesCardContainer>
        ))}
      </S.CausesContainer>
    </S.Container>
  );
}
