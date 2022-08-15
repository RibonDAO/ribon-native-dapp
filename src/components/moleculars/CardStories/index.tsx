import React from "react";
import * as S from "./styles";
import UserStory from "types/entities/UserStory";
import InstaStory from "react-native-insta-story";
import snakeCaseKeys from "snakecase-keys";
import Footer from "components/moleculars/CardStories/Footer";

export type Props = {
  userStories: UserStory[];
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
        duration={55}
        onStart={(item: any) => console.log(item)}
        onClose={(item: any) => console.log("close: ", item)}
      />
    </S.Container>
  );
}

export default CardStories;
