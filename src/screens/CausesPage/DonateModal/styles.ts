import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.ribonWhite};
    padding-top: 14px;
    padding-horizontal: 10px;
    border: 1px solid ${theme.colors.ribonWhite};
    box-sizing: border-box;
    border-radius: 16px;
  `}
`;

export const DonatingText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlack};
    font-weight: 400;
    text-align: center;
    margin-bottom: 8px;
  `}
`;

export const PlaceEmailText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlack};
    font-weight: 600;
    text-align: center;
    margin-bottom: 8px;
    font-size: 18px;
    margin-top: 14px;
  `}
`;

export const DonatingImage = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 250px;
  resize-mode: cover;
`;

export const Input = styled.TextInput`
  height: 40px;
  width: 100%;
  margin: 12px;
  border-width: 1px;
  padding: 10px;
  border-radius: 8px;
`;
