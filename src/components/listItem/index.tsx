import React from "react";
import styled from "styled-components";
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

const Text = styled.div`
  margin-left: 0.6rem;
  color: ${(props) => props.theme.text};
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
  };
}

const ListItem = (props: ListItemProps) => {
  const { data } = props;

  return (
    <Wrapper>
      <Content>
        <CheckBox data={data} />
        <Text>{data.name}</Text>
      </Content>
      <IconContainer>
        <Icon src="./img/close.svg" alt="clear" />
      </IconContainer>
    </Wrapper>
  );
};

export default ListItem;
