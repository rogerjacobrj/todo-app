import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ListItem from "./index";

test("Whether todo item is rendered", () => {
  let data = {
    id: 1,
    name: "Todo",
    completed: true,
  };

  const toggleStatus = jest.fn();
  const deleteTodo = jest.fn();

  render(
    <ListItem data={data} toggleStatus={toggleStatus} deleteTodo={deleteTodo} />
  );

  expect(screen.getByTestId("todo-name")).toHaveTextContent("Todo");
});

test("Whether deleteTodo function is called when x icon is clicked", () => {
  let data = {
    id: 1,
    name: "Todo",
    completed: true,
  };

  const toggleStatus = jest.fn();
  const deleteTodo = jest.fn();

  render(
    <ListItem data={data} toggleStatus={toggleStatus} deleteTodo={deleteTodo} />
  );

  fireEvent.click(screen.getByTestId("delete-todo"));

  expect(deleteTodo).toHaveBeenCalledTimes(1);
});
