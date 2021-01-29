import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-left: 1rem;
`;

const CustomInput = styled.input`
  font-size: 1.5rem;
  padding: 0;
  width: 100%;
  padding: 1rem 0;
  background-color: ${(props) => props.theme.background};
  border: none;
  outline: none;
  color: #c5c7de;

  &::placeholder {
    font-family: "Poppins", sans-serif;
    font-size: 1.1rem;
    color: ${(props) => props.theme.text};
  }
`;

interface InputProps {
  placeholder: string;
  changeHandler: (todo: string | number) => void;
  createTodo: () => void;
  isAdded?: boolean;
}

const Input = (props: InputProps) => {
  const { placeholder, changeHandler, createTodo, isAdded } = props;
  const [inputValue, setInputValue] = useState("");

  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      createTodo();
    }
  };

  const onChangeHandler = (value: string) => {
    setInputValue(value);
    changeHandler(value);
  };

  useEffect(() => {
    if (isAdded) {
      setInputValue("");
    }
  }, [isAdded]);

  return (
    <Wrapper>
      <CustomInput
        type="text"
        value={inputValue}
        placeholder={placeholder}
        data-testid="input"
        onChange={(e) => onChangeHandler(e.target.value)}
        onKeyDown={(e) => keyPressHandler(e)}
      />
    </Wrapper>
  );
};

export default Input;
