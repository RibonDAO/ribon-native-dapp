import styled, { css } from "styled-components/native";
import { View, Text, Image } from "react-native";

export const Container = styled.View`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.ribonWhite};
    flex-direction: column;
    padding: 4px;
    border: 1px solid ${theme.colors.ribonWhite};
    box-sizing: border-box;
    border-radius: 16px;
    width: 100%;
  `}
`;

export const CardImage = styled(Image)`
  ${() => css`
    width: 100%;
    height: 194px;
    border-radius: 16px;
  `}
`;

export const ContainerText = styled(View)`
  ${() => css`
    padding: 8px 12px 12px 12px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const Title = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlack};
    font-weight: 400;
    margin-bottom: 8px;
  `}
`;
