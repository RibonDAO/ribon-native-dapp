import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding: 5px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.ribonBlue};
`;

export const ScrollContainer = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.ribonBlue};
`;

export const AvatarContainer = styled.View`
  height: 120px;
  width: 120px;
  display: flex;
  position: relative;
`;

export const RankImage = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 50px;
  z-index: 3;
`;

export const AvatarImage = styled.Image`
  height: 84px;
  width: 84px;
  position: absolute;
  top: 16;
  left: 16;
`;

export const ProgressBarContainer = styled.View`
  width: 100%;
  display: flex;
`;

export const ProgressBar = styled.View`
  width: 100%;
  display: flex;
  width: 300px;
  height: 30px;
  border-radius: 5px;
  margin: 20px 10px;
  border: 1px solid white;
  overflow: hidden;
  position: relative;

  span {
    height: 100%;
    display: block;
    width: 0;
    color: rgb(255, 251, 251);
    line-height: 30px;
    position: absolute;
    text-align: end;
    padding-right: 5px;
    background-color: white;
  }
`;
