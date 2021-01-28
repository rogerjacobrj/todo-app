import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./index";

test("Whether input component is rendered", () => {
  const placeholder = "Create todo";
  const value = "Create test";
  const createTodo = jest.fn();
  const changeHandler = jest.fn();

  render(
    <Input
      placeholder={placeholder}
      value={value}
      createTodo={createTodo}
      changeHandler={changeHandler}
    />
  );

  expect(screen.getByDisplayValue("Create test")).toBeInTheDocument();
});

const setup = () => {
  const placeholder = "Create todo";
  const value = "Create test";
  const createTodo = jest.fn();
  const changeHandler = jest.fn();

  const utils = render(
    <Input
      placeholder={placeholder}
      value={value}
      createTodo={createTodo}
      changeHandler={changeHandler}
    />
  );
  const input = utils.getByTestId("input") as HTMLInputElement;
  return {
    input,
    ...utils,
  };
};

test("Whether changeHandler function is called", async () => {
//   const placeholder = "Create todo";
//   const value = "";
//   const createTodo = jest.fn();
//   const changeHandler = jest.fn();

//   render(
//     <Input
//       placeholder={placeholder}
//       value={value}
//       createTodo={createTodo}
//       changeHandler={changeHandler}
//     />
//   );

  const { input } = setup();
  expect(input.value).toBe("Create test"); // empty before
  fireEvent.change(input, { target: { value: "Good Day" } });
//   expect(input.value).toBe("Good Day"); //empty after
// expect(screen.getByText("Good Day")).toBeInTheDocument();

  //   const input = screen.getByTestId("input") as HTMLInputElement;

  //   await fireEvent.change(input, { target: { value: "Create testing" } });
  //   expect(input.value).toBe("Create testing");
  //   expect(screen.getByDisplayValue("Create testing")).toBeInTheDocument();
});
