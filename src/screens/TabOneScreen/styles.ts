import styled, { css } from "styled-components/native";

export const Container = styled.View`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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

  Text {
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

export const BackgroundImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const NgoDescription = styled.View`
  display: flex;
  position: absolute;
  z-index: 3;
  width: 100%;
  bottom: 150px;
  padding: 0px 20px;
`;

export const NgoContent = styled.View`
  display: flex;
  border-left: 4px solid ${({ theme }) => theme.colors.ribonBlue};
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  padding-left: 20px;
  padding-bottom: 20px;
`;

export const Title = styled.Text`
  color: white;
`;

export const Description = styled.Text`
  color: white;
  font-weight: 400;
  width: 100%;
`;

export const DarkStroke = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0px;
`;
