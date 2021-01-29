import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./index";

test("Whether input component is rendered", () => {
  const placeholder = "Create todo";
  const createTodo = jest.fn();
  const changeHandler = jest.fn();

  render(
    <Input
      placeholder={placeholder}
      createTodo={createTodo}
      changeHandler={changeHandler}
    />
  );

  expect(screen.getByDisplayValue("")).toBeInTheDocument();
});

test("Whether changeHandler function is called", async () => {
  const placeholder = "Create todo";
  const createTodo = jest.fn();
  const changeHandler = jest.fn();

  render(
    <Input
      placeholder={placeholder}
      createTodo={createTodo}
      changeHandler={changeHandler}
    />
  );

  let input = screen.getByTestId("input") as HTMLInputElement;
  fireEvent.change(input, { target: { value: "Good Day" } });
  expect(input.value).toBe("Good Day");
  expect(changeHandler).toHaveBeenCalledTimes(1);
});

test("Whether createTodo function is called when 'Enter' key is pressed", async () => {
  const placeholder = "Create todo";
  const createTodo = jest.fn();
  const changeHandler = jest.fn();

  const { container } = render(
    <Input
      placeholder={placeholder}
      createTodo={createTodo}
      changeHandler={changeHandler}
    />
  );

  let input = container.getElementsByTagName("input")[0];
  fireEvent.keyDown(input, {
    key: "Enter",
    keyCode: 13,
    which: 13,
    bubbles: true,
  });

  expect(createTodo).toHaveBeenCalledTimes(1);
});

test("Whether input value is cleared when todo is added", async () => {
  const placeholder = "Create todo";
  const createTodo = jest.fn();
  const changeHandler = jest.fn();
  let isAdded = false;

  const { container } = render(
    <Input
      placeholder={placeholder}
      createTodo={createTodo}
      changeHandler={changeHandler}
      isAdded={isAdded}
    />
  );

  let input = container.getElementsByTagName("input")[0];
  fireEvent.keyDown(input, {
    key: "Enter",
    keyCode: 13,
    which: 13,
    bubbles: true,
  });

  expect(createTodo).toHaveBeenCalledTimes(1);
  isAdded = true;
  expect(input.value).toBe("");
});
