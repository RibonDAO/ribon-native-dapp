import React from "react";
import InstagramCard from "./InstagramCard";
import ecoteceImage from "./assets/ecotece.svg";
import * as S from "./styles";

function InstagramCarousel(): JSX.Element {
  return (
    <S.InstagramCardsContainer>
      <InstagramCard id={1} name="Ecotece" ngoLogo={ecoteceImage} active />
    </S.InstagramCardsContainer>
  );
}

export default InstagramCarousel;
