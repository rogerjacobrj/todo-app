import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-left: 1rem;
`;

const CustomInput = styled.input`
  font-size: 1.5rem;
  padding: 0;
  width: 100%;
  height: 3rem;
  background-color: #25273c;
  border: none;
  outline: none;
  color: #c5c7de;

  &::placeholder {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    color: #c5c7de;
  }
`;

interface InputProps {
  placeholder: string;
}

const Input = (props: InputProps) => {
  const { placeholder } = props;

  return (
    <Wrapper>
      <CustomInput type="text" placeholder={placeholder} />
    </Wrapper>
  );
};

export default Input;
