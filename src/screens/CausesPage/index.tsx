import React, { useState } from "react";
import CardCenterImageButton from "components/moleculars/CardCenterImageButton";
import * as S from "./styles";
import { RootTabScreenProps } from "../../../types";
import { useCauses, useNonProfits } from "@ribon/shared";
import GroupButtons from "components/moleculars/GroupButtons";

export default function CausesPage({ navigation }: RootTabScreenProps<any>) {
  const { nonProfits, isLoading } = useNonProfits();
  const { causes } = useCauses();
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const causesFilter = () => {
    const causesApi = causes.filter((cause) => cause.active);
    return causesApi || [];
  };

  const handleCauseChange = (_element: any, index: number) => {
    setSelectedButtonIndex(index);
  };

  const nonProfitsFilter = () => {
    const nonProfitsFiltered = nonProfits?.filter(
      (nonProfit) =>
        nonProfit?.cause?.id === causesFilter()[selectedButtonIndex]?.id,
    );

    return nonProfitsFiltered || [];
  };

  return isLoading ? (
    <></>
  ) : (
    <S.Container>
      <S.Title>Donate to a project</S.Title>
      <S.GroupButtonsContainer>
        <GroupButtons
          elements={causesFilter()}
          onChange={handleCauseChange}
          nameExtractor={(cause) => cause.name}
        />
      </S.GroupButtonsContainer>
      <S.CausesContainer
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {nonProfitsFilter()?.map((nonProfit, idx) => (
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
