import React from "react";
import * as S from "./styles";

export type Props = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function Button({
  text,
  onPress,
  disabled = false,
}: Props): JSX.Element {
  return (
    <S.Container onPress={onPress} disabled={disabled}>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}
