import React from "react";
import useNavigation from "hooks/useNavigation";
import * as S from "./styles";
import ribonIcon from "./assets/ribon-white-logo.svg";
import closeIcon from "./assets/close.svg";

type Props = {
  setVisible: (visible: boolean) => void;
  visible: boolean;
};

function NgoHeader({ setVisible }: Props): JSX.Element {
  function closeModal() {
    return setVisible(false);
  }

  return (
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
  );
}

export default NgoHeader;
