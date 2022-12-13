import React from "react";
import * as S from "./styles";
import InstaStory from "react-native-insta-story";
import snakeCaseKeys from "snakecase-keys";

export type Props = {
  userStories: any[];
};
function CardStories({ userStories }: Props): JSX.Element {
  function data() {
    return snakeCaseKeys(userStories, {
      deep: true,
      exclude: ["swipeText", "onPress"],
    });
  }

  return (
    <S.Container>
      <InstaStory
        data={data()}
        duration={8}
        onStart={(item: any) => console.log(item)}
        onClose={(item: any) => console.log("close: ", item)}
      />
    </S.Container>
  );
}

export default CardStories;
