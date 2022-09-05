import styled, { css } from "styled-components/native";

export const HeaderNavigation = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 4;
  left: 0;
  top: 0;
  padding: 16px;
  width: 100%;
  position: absolute;
  background-color: transparent;
`;

export const TransferBar = styled.View`
  width: 100%;
  height: 3px;
  margin-top: 4px;
  position: relative;
  background: rgba(255, 255, 255, 0.4);
  overflow: hidden;

  span {
    display: block;
    height: 100%;
  }
`;

export const Icon = styled.Image`
  width: 24px;
  height: 24px;
  margin-bottom: 16px;
`;

export const Progress = styled.Text`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgGray};
    animation: progressBar 10s ease-in-out;
    animation-fill-mode: both;

    @keyframes progressBar {
      0% {
        width: 0;
      }
      100% {
        width: 100%;
      }
    }
  `}
`;
