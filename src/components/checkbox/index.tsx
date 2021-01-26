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
  background-color: #25273c;
  position: relative;
  transition: background-color 0.4s;
  padding: 0.35rem;
  border: 1px solid #45475a;
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

const CheckBox = () => {
  return (
    <Wrapper>
      <CheckContainer>
        <Input id="checkbox" type="checkbox" hidden />
        <Label htmlFor="checkbox"></Label>
      </CheckContainer>
    </Wrapper>
  );
};

export default CheckBox;
