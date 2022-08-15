import styled, { css } from "styled-components/native";
import { View, Text, Image, ScrollView } from "react-native";

export const Container = styled.ScrollView`
  ${({ theme }) => css`
    background-color: ${theme.colors.ribonWhite};
    padding: 4px;
    border: 1px solid ${theme.colors.ribonWhite};
    box-sizing: border-box;
    border-radius: 16px;
    height: 100%;
  `}
`;

export const CausesCardContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CausesContainer = styled.View`
  width: 100%;
  margin-top: 20px;
  column-gap: 8px;
  row-gap: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlack};
    font-weight: 400;
    text-align: center;
    margin-bottom: 8px;
  `}
`;
