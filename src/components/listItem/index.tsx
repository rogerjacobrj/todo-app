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
    border-top: 1px solid #383a4f;
    border-bottom: 1px solid #383a4f;

    &:hover {
        cursor: pointer;
    }

    &:hover ${IconContainer} {
        display: flex;
        cursor: pointer;
    }
`;

const Content = styled.div`
    display: flex;
    align-items: center;
`;

const Text = styled.div`
    margin-left: 0.6rem;
    color: #c5c7de;
`;

const Icon = styled.img`
    width: 20px;
    height: auto;
    background-color: #c5c7de;
    border-radius: 50%;
`;

const ListItem = () => {
    return (<Wrapper>
        <Content>
            <CheckBox />
            <Text>Create new AWS server</Text>
        </Content>
        <IconContainer>
            <Icon src="./img/close.svg" alt="clear" />
        </IconContainer>
    </Wrapper>);
};

export default ListItem;