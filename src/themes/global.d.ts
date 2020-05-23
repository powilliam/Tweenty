import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    backgroundColor: string;
    cardColor: string;
    textColor: string;
    subtextColor: string;
    surfaceColor: string;
    systemColor: string;
    accentColor: string;
  }
}
