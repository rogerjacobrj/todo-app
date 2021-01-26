import { createGlobalStyle, DefaultTheme } from "styled-components";

export const lightTheme = {
    body: '#f8f8f8',
    text: '#706f75',
    background: '#ffffff',
    circleBorder: "#ebebeb",
    listItemBorder: "#e8e8e8",
    iconBackground: "#ffffff"
};

export const darkTheme: DefaultTheme = {
    body: '#363537',
    text: '#c5c7de',
    background: '#25273c',
    circleBorder: "#45475a",
    listItemBorder: "#383a4f",
    iconBackground: "#c5c7de"
}

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body};
    }
`;