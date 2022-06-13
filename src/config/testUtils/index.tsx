import React from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "styles/theme";

export function renderComponent(component: JSX.Element) {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
}
