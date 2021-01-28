import React from "react";
import styled, { css } from "styled-components";
import { CheckBox } from "../index";

const IconContainer = styled.div`
  display: none;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.6rem;
  border-bottom: 1px solid ${(props) => props.theme.listItemBorder};

  &:hover {
    cursor: pointer;
  }

  &:hover ${IconContainer} {
    display: flex;
    cursor: pointer;
  }

  &:last-child {
    border-bottom: 0;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

interface TextProps {
  completed: boolean;
}

const Text = styled.div`
  margin-left: 0.6rem;
  color: ${(props) => props.theme.text};
  ${(props: TextProps) =>
    props.completed &&
    css`
      text-decoration: line-through;
    `}
`;

const Icon = styled.img`
  width: 20px;
  height: auto;
  background-color: ${(props) => props.theme.iconBackground};
  border-radius: 50%;
`;

interface ListItemProps {
  data: {
    id: number;
    name: string;
    completed: boolean;
  };
  toggleStatus: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const ListItem = (props: ListItemProps) => {
  const { data, toggleStatus, deleteTodo } = props;

  return (
    <Wrapper>
      <Content>
        <CheckBox data={data} toggleStatus={toggleStatus} />
        <Text data-testid="todo-name" completed={data.completed}>{data.name}</Text>
      </Content>
      <IconContainer data-testid="delete-todo"  onClick={() => deleteTodo(data.id)}>
        <Icon src="./img/close.svg" alt="clear" />
      </IconContainer>
    </Wrapper>
  );
};

export default ListItem;
