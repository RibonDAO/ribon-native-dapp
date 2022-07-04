import React from "react";
import Button from "components/atomics/Button";
import checkIcon from "./assets/check-mark.svg";
import * as S from "./styles";

type Props = {
  ngoLogo: string;
  ngoName: string | undefined;
  causeText: string | undefined;
};

function NgoFooter({ ngoLogo, ngoName, causeText }: Props): JSX.Element {
  function handleButtonClick() {}

  return (
    <S.Footer>
      <S.LeftContainer>
        <S.FooterImageContainer>
          <S.FooterImageCircle>
            <S.FooterImage source={{ uri: ngoLogo }} />
          </S.FooterImageCircle>
        </S.FooterImageContainer>

        <S.FooterContent>
          <S.FooterTitleContainer>
            <S.FooterTitle>{ngoName}</S.FooterTitle>
            <S.FooterTitleImage source={checkIcon} />
          </S.FooterTitleContainer>
          <S.FooterDescription>{causeText}</S.FooterDescription>
        </S.FooterContent>
      </S.LeftContainer>

      <S.FooterButtonContainer>
        <Button text="Usar vale" onPress={handleButtonClick} />
      </S.FooterButtonContainer>
    </S.Footer>
  );
}

export default NgoFooter;
