import React, { useState } from "react";
import { getLocalStorageItem, setLocalStorageItem } from "lib/localStorage";
import NgoStoriesModal from "../../NgoStoriesPage";
import checkIcon from "./assets/check-mark.svg";
import * as S from "./styles";

type Props = {
  id: number;
  active?: boolean;
  name: string;
  ngoLogo: string;
};

function InstagramCard({ active, name, ngoLogo, id }: Props): JSX.Element {
  const [viewed, setViewed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  function redirectToNgoInstagramPage() {
    setModalVisible(true);
  }

  function ngoNameResize(name: string) {
    if (name.length < 9) {
      return name;
    }

    const resizedName = name.substring(0, 8);
    const resizedNameWithEllipsis = resizedName + "...";

    return resizedNameWithEllipsis;
  }

  function renderModal() {
    return (
      <NgoStoriesModal
        id={id}
        visible={modalVisible}
        setVisible={setModalVisible}
      />
    );
  }

  return (
    <S.InstagramCard
      viewed={viewed}
      active={active}
      onClick={redirectToNgoInstagramPage}
    >
      <S.Image src={ngoLogo} />

      <S.TitleContainer>
        <S.Title>{ngoNameResize(name)}</S.Title>

        <S.TitleImage src={checkIcon} />
      </S.TitleContainer>

      {renderModal()}
    </S.InstagramCard>
  );
}

export default InstagramCard;
