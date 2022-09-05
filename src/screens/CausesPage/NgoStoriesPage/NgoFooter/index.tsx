import React from "react";
import Button from "components/atomics/Button";
import checkIcon from "./assets/check-mark.svg";
import * as S from "./styles";

type Props = {
  ngoLogo?: string;
  ngoName?: string;
};

function NgoFooter({ ngoLogo, ngoName }: Props): JSX.Element {
  return (
    <S.Footer>
      <S.FooterImageContainer>
        <S.FooterImageCircle>
          <S.FooterImage src={ngoLogo} />
        </S.FooterImageCircle>
      </S.FooterImageContainer>

      <S.FooterContent>
        <S.FooterTitleContainer>
          <S.FooterTitle>{ngoName}</S.FooterTitle>
          <S.FooterTitleImage src={checkIcon} />
        </S.FooterTitleContainer>
        <S.FooterDescription>Sustentabilidade no mundo</S.FooterDescription>
      </S.FooterContent>

      <S.FooterButtonContainer>
        <Button text="Contribuir" onPress={() => {}} />
      </S.FooterButtonContainer>
    </S.Footer>
  );
}

export default NgoFooter;
