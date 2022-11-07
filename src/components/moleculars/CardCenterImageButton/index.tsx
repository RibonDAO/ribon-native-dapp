import Button from "components/atomics/Button";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import securityIcon from "assets/icons/security-mark-icon.png";
import * as S from "./styles";

export type Props = {
  image: string;
  buttonText: string;
  onClickButton: () => void;
  imageDescription?: string;
  infoTextLeft?: string;
  infoTextRight?: string;
};

function CardCenterImageButton({
  image,
  buttonText,
  imageDescription,
  onClickButton,
  infoTextLeft,
  infoTextRight,
}: Props): JSX.Element {
  return (
    <S.Container style={S.inline.container}>
      <S.CardWrapper>
        <S.ContainerImage>
          <S.CardImage source={{ uri: image }} />
          <S.ImageDescription>{imageDescription}</S.ImageDescription>
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.5)", "rgba(0,0,0,0.7)"]}
            style={S.inline.darkStroke}
          />
        </S.ContainerImage>

        <S.ContainerText>
          <S.InfoContainer>
            {infoTextLeft && (
              <>
                <S.Info>{infoTextLeft}</S.Info>
                <S.Icon source={securityIcon} />
              </>
            )}
            {infoTextRight && (
              <>
                <S.Bullet>•</S.Bullet>
                <S.Info>{infoTextRight}</S.Info>
              </>
            )}
          </S.InfoContainer>
          <Button onPress={onClickButton} text={buttonText} />
        </S.ContainerText>
      </S.CardWrapper>
    </S.Container>
  );
}

export default CardCenterImageButton;
