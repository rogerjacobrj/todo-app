import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "./index";

test("Whether checkbox component is rendered", () => {
  const data = {
    id: 1,
    name: "Todo",
    completed: false,
  };
  
  render(<Checkbox data={data} />);

  const input = screen.getByTestId("checkbox") as HTMLInputElement;
  expect(input.checked).toBe(false);
});

test("Whether toggleStatus function is called", () => {
  const createTodo = jest.fn();
  const toggleStatus = jest.fn();

  const data = {
    id: 1,
    name: "Todo",
    completed: false,
  };

  render(
    <Checkbox data={data} createTodo={createTodo} toggleStatus={toggleStatus} />
  );

  const input = screen.getByTestId("checkbox");
  fireEvent.click(input);
  expect(toggleStatus).toHaveBeenCalledTimes(1);
});

test("Whether createTodo function is called", () => {
  const createTodo = jest.fn();
  const toggleStatus = jest.fn();

  render(<Checkbox createTodo={createTodo} toggleStatus={toggleStatus} />);

  const input = screen.getByTestId("checkbox");
  fireEvent.click(input);
  expect(createTodo).toHaveBeenCalledTimes(1);
});
