import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const CheckContainer = styled.div``;

const Label = styled.label`
  display: block;
  width: 22px;
  height: 22px;
  background-color: ${(props) => props.theme.background};
  position: relative;
  transition: background-color 0.4s;
  padding: 0.35rem;
  border: 1px solid ${(props) => props.theme.circleBorder};
  border-radius: 50%;

  &:after {
    content: "";
    position: absolute;
    width: 6px;
    height: 10px;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%) rotateZ(40deg);
    opacity: 0;
    transition: all 0.4s;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  &:checked ~ ${Label} {
    background-color: #7f00ff;
    background: -webkit-linear-gradient(to right, #e100ff, #7f00ff);
    background: linear-gradient(to right, #e100ff, #7f00ff);
  }

  &:checked ~ ${Label}::after {
    opacity: 1;
  }
`;

interface CheckBoxProps {
  data?: {
    id: number;
    name: string;
  };
}

const CheckBox = (props: CheckBoxProps) => {
  const { data } = props;

  let id;
  data ? (id = `${data.name}_${data.id}`) : (id = "checkbox");

  return (
    <Wrapper>
      <CheckContainer>
        <Input id={id} type="checkbox" hidden />
        <Label htmlFor={id}></Label>
      </CheckContainer>
    </Wrapper>
  );
};

export default CheckBox;
