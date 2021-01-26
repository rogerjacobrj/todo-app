// import original module declarations
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    body: string;
    text: string;
    background: string;
    circleBorder: string;
    listItemBorder: string;
    iconBackground: string;
  }
}
