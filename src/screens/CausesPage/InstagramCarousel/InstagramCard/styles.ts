import styled, { css } from "styled-components/native";

type InstagramCardProps = {
  viewed?: string;
  active?: boolean;
};

export const InstagramCard = styled.View<InstagramCardProps>`
  ${({ theme, viewed, active }) => css`
    display: ${active ? "flex" : "none"};
    flex-direction: column;
    width: 64px;
    height: 64px;
    padding: 8px;
    border-radius: 50%;
    box-shadow: 0px 4px 12px rgba(24, 86, 105, 0.15);
    background-color: ${viewed === "true"
      ? theme.colors.darkGray
      : theme.colors.ribonBlack};
    border: ${viewed === "true"
      ? "none"
      : "3px solid " + theme.colors.ribonBlue};

    &:not(:first-child) {
      margin-left: 12px;
    }

    @media (min-width: ${theme.breakpoints.pad}) {
      max-width: 30%;
    }
  `}
`;

export const Image = styled.Image`
  align-self: center;
  width: 42px;
  height: 42px;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.ribonBlack};
`;

export const TitleImage = styled.Image``;
