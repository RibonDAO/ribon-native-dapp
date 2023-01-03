import styled, { css } from "styled-components/native";
import { stylizedHeadingMedium } from "@ribon/shared/styles/typography/stylized";

export const Container = styled.ScrollView`
  ${({ theme }) => css`
    box-sizing: border-box;
    border-radius: 16px;
    height: 100%;
  `}
`;

export const CausesCardContainer = styled.View`
  ${({ theme }) => css`
    height: auto;
    width: 300px;
  `}
`;

export const CausesContainer = styled.ScrollView`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    padding-bottom: 40px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    ${stylizedHeadingMedium}
    color: "${theme.colors.ribonBlack}";
    padding: 8px;
    width: 100%;
    margin-top: 10px;
  `}
`;

export const GroupButtonsContainer = styled.View`
  ${({ theme }) => css`
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 16px;
  `}
`;
