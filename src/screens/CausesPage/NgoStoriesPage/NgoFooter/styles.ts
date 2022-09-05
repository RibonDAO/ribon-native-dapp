import styled, { css } from "styled-components/native";

export const Footer = styled.View`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  background-color: black;
  bottom: 0;
  left: 0;
`;

export const FooterImageContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;

export const FooterImageCircle = styled.View`
  display: flex;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.ribonBlack};
`;

export const FooterImage = styled.Image`
  width: 100%;
  padding: 8px;
  display: flex;
  align-self: center;
`;

export const FooterContent = styled.View`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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
