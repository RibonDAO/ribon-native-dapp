import styled from "styled-components/native";

export const FriendCard = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.ribonWhite};
  border-radius: 16px;
  padding: 0px 12px;
  height: 80px;
  width: 100%;
  box-shadow: 0 0 10px #9ecaed;
`;

export const CardImageContainer = styled.View`
  width: 20%;
`;

export const CardImage = styled.Image`
  height: 52px;
  width: 52px;
  border-radius: 50px;
  border: 3px solid blue;
  box-shadow: 0 0 10px #9ecaed;
`;

export const DescriptionContainer = styled.View`
  width: 60%;
`;

export const FriendName = styled.Text`
  font-size: 16px;
  text-align: start;
`;

export const FriendLevel = styled.Text`
  font-size: 16px;
  text-align: start;
`;

export const DonationContainer = styled.View`
  width: 20%;
`;

export const FriendDonations = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: end;
`;
