import theme from "./styles/theme";
import "styled-components/native";

type Theme = typeof theme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
