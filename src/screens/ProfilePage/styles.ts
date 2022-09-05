import styled, { css } from "styled-components/native";

export const Container = styled.View`
  height: 100vh;
  padding: 5px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const Separator = styled.View`
  margin: 20px 0px;
  height: 1px;
  width: 80%;
`;
