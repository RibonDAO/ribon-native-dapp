import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import theme from "styles/theme";

export const MainContainer = styled.View`
  flex: 1;
  background-color: ${theme.colors.ribonBlue};
`;

export const BadgesContainer = styled.View`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${theme.colors.ribonWhite};
  flex: 1;
  padding: 30px 15px;
`;

export const BadgeContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;
`;

export const InfoContainer = styled.View`
  padding: 15px;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const BadgeImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 70px;
  margin: 5px 0;
  resize-mode: contain;
`;

export const BadgeCard = styled.View`
  align-items: center;
  display: flex;
  justify-content: center;
  border-width: 2px;
  border-radius: 50px;
  width: 80px;
  height: 80px;
`;

export const BadgeText = styled.Text`
  text-align: center;
  font-size: 14px;
  margin-top: 4px;
`;

export const BadgeCategory = styled.Text`
  font-weight: bold;
  margin-bottom: 35px;
  font-size: 12px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: ${theme.colors.ribonWhite};
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  color: ${theme.colors.ribonWhite};
  text-align: center;
`;
