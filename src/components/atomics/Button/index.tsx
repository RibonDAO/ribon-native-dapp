import React from "react";
import * as S from "./styles";

export type Props = {
  text: string;
  onPress: () => void;
};

export default function Button({ text, onPress }: Props): JSX.Element {
  return (
    <S.Container onPress={onPress}>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}
