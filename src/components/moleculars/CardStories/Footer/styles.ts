import styled, { css } from "styled-components/native";

export const Footer = styled.View`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  bottom: -28px;
  left: 0;
  z-index: 3;
  position: absolute;
`;

export const FooterImageContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;

export const FooterImageCircle = styled.View`
  display: flex;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.ribonBlack};
`;

export const FooterImage = styled.Image`
  width: 100%;
  padding: 8px;
  display: flex;
  align-self: center;
`;

export const FooterContent = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const LeftContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const FooterTitleContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const FooterTitle = styled.Text`
  color: white;
  font-weight: 700;
  line-height: 19px;
`;

export const FooterTitleImage = styled.Image``;

export const FooterDescription = styled.Text`
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: 19px;
  font-weight: 500;
`;

export const FooterButtonContainer = styled.View`
  display: flex;
  width: 160px;
  padding: 0px 20px;
`;
