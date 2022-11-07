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
  ${({ theme }) => css`
    height: auto;
  `}
`;

export const CausesContainer = styled.View``;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlack};
    font-weight: 400;
    margin-bottom: 8px;
  `}
`;
