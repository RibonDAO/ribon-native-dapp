import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Image = styled.Image`
  height: 72px;
  width: 72px;
  border-radius: 50px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    margin-top: 16px;
    font-size: 14px;
    color: ${theme.colors.ribonBlack};
  `}
`;
