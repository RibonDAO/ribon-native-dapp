import styled from "styled-components/native";
import { Inter_900Black } from "@expo-google-fonts/inter";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.ribonBlue};
  width: 100%;
  height: 40px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.ribonWhite};
  font-family: ${Inter_900Black};
`;
