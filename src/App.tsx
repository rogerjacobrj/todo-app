import React, { useState, useReducer } from "react";
import styled, { ThemeProvider, css } from "styled-components";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { Input, CheckBox, ListItem } from "./components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import { initialState, reducer } from "./state";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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

interface FooterProps {
  hasItems: boolean;
}

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.2rem;
  background-color: ${(props) => props.theme.background};
  ${(props: FooterProps) =>
    props.hasItems &&
    css`
      border-top: 1px solid ${(props) => props.theme.listItemBorder};
    `}
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

const SeparateTabSection = styled.div`
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

const NoContent = styled.div`
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.text};
`;

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todo, list } = state;

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const setValue = (field: string, value: string | number) => {
    dispatch({ type: "SET_VALUE", field: field, value: value });
  };

  const changeHandler = (todo: string | number) => {
    setValue("todo", todo);
  };

  const createTodo = () => {
    if (todo.length > 0) {
      dispatch({ type: "ADD_TODO" });
    }
  };

  const toggleStatus = (id: number) => {
    dispatch({ type: "TOGGLE_STATUS", id: id });
  };

  const getIncompleteCount = () => {
    return list.filter((item) => item.completed !== true).length;
  };

  console.log("state", state);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Wrapper>
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
                <CheckBox createTodo={createTodo} disabled={true} />
                <Input
                  placeholder="Create a new todo..."
                  changeHandler={changeHandler}
                  createTodo={createTodo}
                  value={todo}
                />
              </CreateBox>

              <TodoList>
                {list &&
                  list.map((item, idx) => {
                    return (
                      <ListItem
                        data={item}
                        key={`todo-${idx}`}
                        toggleStatus={toggleStatus}
                      />
                    );
                  })}
              </TodoList>

              <Footer hasItems={list.length > 0}>
                {list.length > 0 ? (
                  <>
                    <CountSection>
                      {getIncompleteCount()} items left
                    </CountSection>

                    <TabSection>
                      <TabSectionItem>All</TabSectionItem>
                      <TabSectionItem>Active</TabSectionItem>
                      <TabSectionItem>Completed</TabSectionItem>
                    </TabSection>
                    <ClearSection>Clear Completed</ClearSection>
                  </>
                ) : (
                  <NoContent>No todo items in the list</NoContent>
                )}
              </Footer>

              <SeparateTabSection>
                <TabSectionItem>All</TabSectionItem>
                <TabSectionItem>Active</TabSectionItem>
                <TabSectionItem>Completed</TabSectionItem>
              </SeparateTabSection>
            </Content>
          </Box>
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
