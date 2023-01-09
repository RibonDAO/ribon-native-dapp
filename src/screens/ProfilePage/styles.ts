import styled, { css } from "styled-components/native";
import { Table, Rows } from "react-native-table-component";

export const Container = styled.View`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.ribonBlue};
`;

export const ScrollContainer = styled.ScrollView`
  display: flex;
  background-color: ${({ theme }) => theme.colors.ribonBlue};
  width: 100%;
`;

export const AvatarSection = styled.View`
  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const RankImage = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 50px;
  z-index: 3;
  position: absolute;
  top: 80;
`;

export const AvatarImage = styled.Image`
  height: 70px;
  width: 70px;
  position: absolute;
  top: 104;
`;

export const ProgressBarContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const ProgressBar = styled.View`
  margin-top: 8px;
  width: 156px;
  height: 8px;
  border: 1px solid #ffffff;
  border-radius: 4px;
`;

export const ProgressValue = styled.Text`
  color: white;
  margin-top: 8px;
`;

export const Nickname = styled.Text`
  font-size: 20px;
  color: white;
  align-self: center;
  margin-top: 8px;
`;

export const StreakSection = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
`;

export const StreakBox = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33%;
`;

export const StreakValue = styled.Text`
  font-size: 20px;
  color: white;
  font-family: italic;
`;

export const StreakName = styled.Text`
  font-size: 16px;
  color: white;
  font-family: italic;
`;

export const ActivitySection = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

export const ActivityTable = styled(Table)`
  width: 100%;
  display: flex;
`;

export const ActivityRows = styled(Rows)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
  background-color: #00da93;
`;

export const ActivityTitle = styled.Text`
  font-family: "Gambarino-Regular";
  color: white;
  font-size: 20px;
  margin-bottom: 16px;
  align-self: flex-start;
`;

export const ExploreSection = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

export const BackgroundSection = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const BackgroundText = styled.Text`
  color: white;
`;

export const ExploreTitle = styled.Text`
  color: white;
  font-size: 20px;
  margin-bottom: 16px;
  align-self: flex-start;
`;

export const CardsCarousel = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ExploreCard = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 140px;
  border-radius: 20px;
  overflow: hidden;
  margin-right: 16px;
`;

export const ExploreBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const CardTitle = styled.Text`
  position: absolute;
  color: white;
  font-weight: bold;
  font-size: 20;
`;
