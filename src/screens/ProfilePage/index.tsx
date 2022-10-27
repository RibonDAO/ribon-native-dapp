import React, { useEffect } from "react";
import { useCurrentUser } from "../../contexts/currentUserContext";
import useImpact from "hooks/apiHooks/useImpact";
import RankIcon from "./assets/fire-rank.png";
import Avatar from "./assets/avatar.png";
import * as S from "./styles";

export default function ProfilePage() {
  const { currentUser } = useCurrentUser();
  const { userImpact } = useImpact();

  useEffect(() => {
    console.log(currentUser, userImpact);
  }, [currentUser, userImpact]);

  return (
    <S.Container>
      <S.ScrollContainer>
        <S.RankImage source={RankIcon} />
        <S.AvatarImage source={Avatar} />

        {/* <S.ProgressBarContainer>
          <S.ProgressBar>
            <span data-progress="70" />
          </S.ProgressBar>
        </S.ProgressBarContainer> */}
      </S.ScrollContainer>
    </S.Container>
  );
}
