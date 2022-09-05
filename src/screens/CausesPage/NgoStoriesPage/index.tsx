import React, { useCallback, useEffect } from "react";
import NgoFooter from "./NgoFooter";
import ribonIcon from "./assets/ribon-white-logo.svg";
import closeIcon from "./assets/close.svg";
import * as S from "./styles";

type Props = {
  id: number;
};

const ngoPost = {
  id: 1,
  title: "O que é o ecotece?",
  description:
    "O ecotece é um projeto de inovação que visa ajudar ao ecossistema a seguir a natureza.",
  backgroundImage:
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  ngo: {
    id: 1,
    name: "Ecotece",
    whiteLogo:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
};

function NgoStoriesPage({ id }: Props): JSX.Element {
  useEffect(() => {
    setTimeout(() => {}, 11000);
  }, []);

  const closeModal = useCallback(() => {
    console.log("Opa");
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.HeaderNavigation>
          <S.Icon src={ribonIcon} onClick={closeModal} />
          <S.Icon src={closeIcon} onClick={closeModal} />
        </S.HeaderNavigation>

        <S.TransferBar>
          <span>
            <S.Progress />
          </span>
        </S.TransferBar>
      </S.Header>

      <S.DarkStroke />

      <S.BackgroundImage
        src={ngoPost?.backgroundImage}
        alt={ngoPost?.ngo?.name}
      />

      <S.NgoDescription>
        <S.NgoContent>
          <S.Title>{ngoPost?.title}</S.Title>
          <S.Description>{ngoPost?.description}</S.Description>
        </S.NgoContent>
      </S.NgoDescription>

      <NgoFooter
        ngoLogo={ngoPost?.ngo?.whiteLogo}
        ngoName={ngoPost?.ngo?.name}
      />
    </S.Container>
  );
}

export default NgoStoriesPage;
