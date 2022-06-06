import styled, { css } from "styled-components/native";
import { View, Text, Image } from "react-native";

export const Container = styled.View`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.ribonWhite};
    flex-direction: column;
    align-items: center;
    padding: 4px;
    border: 1px solid ${theme.colors.ribonWhite};
    box-sizing: border-box;
    border-radius: 16px;
    width: 100%;
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
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
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
