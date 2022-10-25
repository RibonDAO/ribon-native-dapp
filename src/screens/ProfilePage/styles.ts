import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding: 5px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ScrollContainer = styled.ScrollView``;

export const Email = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-top: 8px;
`;

export const UserLevel = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-top: 8px;
`;

export const UserDonations = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
`;

export const Separator = styled.View`
  margin: 10px 0px;
  height: 1px;
  width: 80%;
`;

export const UserDataSection = styled.View`
  display: flex;
  align-items: center;
`;

export const UserProfileImage = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  box-shadow: 0 0 10px gold;
`;

export const FriendsSection = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`;

export const FriendCards = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const BadgesSection = styled.View`
  padding: 20px;
`;

export const BadgeContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const BadgeImage = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 50px;
`;
