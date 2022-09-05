import React, { useCallback, useEffect } from "react";
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
    "https://storage.googleapis.com/ribon-api_activestorage/8PSGqCFC6MF6NGEHSxofDtsp?GoogleAccessId=ribon-api-active-storage%40ribon-api.iam.gserviceaccount.com&Expires=1656338010&Signature=SwYVHWpDubGwsUJQVJNSrKrGvnSsAuyIjY4asefd7QXy4%2BM81GFo5N0SJne%2F23%2BTabgsUgDhXoeD2FMCJJvyp0Ia4IKpxz4D73bVfeNAwyuOZAdd7eLQ3CwumPWA35KeK31E57SntEEFFZNBCjxqi08sXxR2O2%2B%2BWn5DUtREXUbFIHNUf09UvY%2FDou0QVPCWqe3e5VAnB%2FfPm33JvRfdfqaz%2BHeGrg0%2FZCV6NZxdjcXvXKCKj6c19Z0KgiXjkf9q7mKTE1RI1X%2FSlfjgX6a3qgdQY%2F2ceabOeTDBVefJQqiZN%2BWUMoeSBAbzza9e7HHYI7%2FS9ufN7%2B10SXxQjcvnfQ%3D%3D&response-content-disposition=inline%3B+filename%3D%22ecotece+%25281%2529.jpg%22%3B+filename%2A%3DUTF-8%27%27ecotece%2520%25281%2529.jpg&response-content-type=image%2Fjpeg",
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
    </S.Container>
  );
}

export default NgoStoriesPage;
