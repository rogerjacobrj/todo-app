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
  background-color: ${(props) => props.theme.background};
  border: none;
  outline: none;
  color: #c5c7de;
  padding-bottom: 0.3rem;

  &::placeholder {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    color: ${(props) => props.theme.text};
  }
`;

interface InputProps {
  placeholder: string;
  changeHandler: (todo: string | number) => void;
  createTodo: () => void;
  value: string | number;
}

const Input = (props: InputProps) => {
  const { placeholder, value, changeHandler, createTodo } = props;

  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      createTodo();
    }
  };

  return (
    <Wrapper>
      <CustomInput
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => changeHandler(e.target.value)}
        onKeyDown={(e) => keyPressHandler(e)}
      />
    </Wrapper>
  );
};

export default Input;
