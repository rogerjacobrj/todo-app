import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { Input, CheckBox, ListItem } from "./components";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Banner = styled.div`
  // padding: 5rem 0;
  background-image: url("./img/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.4;
  min-height: 10rem;

  @media (min-width: 576px) {
  }

  @media (min-width: 768px) {
    padding: 8rem 0;
  }

  @media (min-width: 992px) {
    // padding: 10rem 0;
  }

  @media (min-width: 1200px) {
    padding: 10rem 0;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Box = styled.div`
  // position: absolute;
  // top: -9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: #ffffff;
  padding: 2rem 0;
  min-width: 350px;

  @media (min-width: 576px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    top: -15rem;
    min-width: 660px;
  }
`;

const Content = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
  align-items: center;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-size: 1.6rem;
  color: ${(props) => props.theme.text};
  font-weight: 700;
`;

const CreateBox = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  padding: 0 0.6rem;
  border-radius: 6px;
`;

const TodoList = styled.div`
  background-color: ${(props) => props.theme.background};
  overflow: scroll;
  max-height: 400px;
  margin-top: 1.5rem;
  border-radius: 6px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.2rem;
  background-color: ${(props) => props.theme.background};
  border-top: 1px solid ${(props) => props.theme.listItemBorder};
`;

const CountSection = styled.div`
  color: ${(props) => props.theme.text};
`;

const TabSection = styled.div`
  display: none;

  @media (min-width: 576px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    display: flex;
    margin: 0 0.5rem;
  }
`;

const TabSectionItem = styled.div`
  margin: 0 0.5rem;
  color: ${(props) => props.theme.text};

  &:hover {
    cursor: pointer;
    color: #4b7ad6;
  }
`;

const SeperateTabSection = styled.div`
  margin-top: 1.5rem;
  display: flex;
  padding: 1rem 1.2rem;
  background-color: ${(props) => props.theme.background};
  justify-content: center;
  color: ${(props) => props.theme.text};

  @media (min-width: 576px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

const ClearSection = styled.div`
  color: ${(props) => props.theme.text};

  &:hover {
    cursor: pointer;
    color: #4b7ad6;
  }
`;

const App = () => {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    console.log("triggered");
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Wrapper>
        {/* <Banner></Banner> */}
        <Container>
          <Box>
            <Header>
              <Title>Todo</Title>
              <Toggle
                defaultChecked={true}
                onChange={themeToggler}
                icons={{
                  checked: null,
                  unchecked: null,
                }}
              />
            </Header>
            <Content>
              <CreateBox>
                <CheckBox />
                <Input placeholder="Create a new todo..." />
              </CreateBox>

              <TodoList>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
              </TodoList>

              <Footer>
                <CountSection>5 items left</CountSection>

                <TabSection>
                  <TabSectionItem>All</TabSectionItem>
                  <TabSectionItem>Active</TabSectionItem>
                  <TabSectionItem>Completed</TabSectionItem>
                </TabSection>
                <ClearSection>Clear Completed</ClearSection>
              </Footer>

              <SeperateTabSection>
                <TabSectionItem>All</TabSectionItem>
                <TabSectionItem>Active</TabSectionItem>
                <TabSectionItem>Completed</TabSectionItem>
              </SeperateTabSection>
            </Content>
          </Box>
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
