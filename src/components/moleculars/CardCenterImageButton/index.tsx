import Button from "components/atomics/Button";
import React from "react";
import * as S from "./styles";

export type Props = {
  image: string;
  title?: string;
  buttonText: string;
  onClickButton: () => void;
};
function CardCenterImageButton({
  image,
  title,
  buttonText,
  onClickButton,
}: Props): JSX.Element {
  return (
    <S.Container>
      <S.CardImage source={{ uri: image }} />
      <S.ContainerText>
        <S.Title>{title}</S.Title>
        <Button onPress={onClickButton} text={buttonText} />
      </S.ContainerText>
    </S.Container>
  );
}

export default CardCenterImageButton;
