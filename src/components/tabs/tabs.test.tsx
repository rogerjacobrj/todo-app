import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Tabs from "./index";

test("Whether 'All' tab is rendered", () => {
  const tabClick = jest.fn();

  render(<Tabs activeTab="all" tabClick={tabClick} />);

  expect(screen.getByTestId("allTab")).toHaveTextContent("All");
});

test("Whether 'All' tab is clicked", () => {
  const tabClick = jest.fn();

  render(<Tabs activeTab="all" tabClick={tabClick} />);

  fireEvent.click(screen.getByTestId("allTab"));
  expect(tabClick).toHaveBeenCalledTimes(1);
});

test("Whether 'Active' tab is rendered", () => {
  const tabClick = jest.fn();

  render(<Tabs activeTab="active" tabClick={tabClick} />);

  expect(screen.getByTestId("activeTab")).toHaveTextContent("Active");
});

test("Whether 'Active' tab is clicked", () => {
  const tabClick = jest.fn();

  render(<Tabs activeTab="active" tabClick={tabClick} />);

  fireEvent.click(screen.getByTestId("activeTab"));
  expect(tabClick).toHaveBeenCalledTimes(1);
});

test("Whether 'Completed' tab is rendered", () => {
  const tabClick = jest.fn();

  render(<Tabs activeTab="completed" tabClick={tabClick} />);

  expect(screen.getByTestId("completedTab")).toHaveTextContent("Completed");
});

test("Whether 'Completed' tab is clicked", () => {
  const tabClick = jest.fn();

  render(<Tabs activeTab="completed" tabClick={tabClick} />);

  fireEvent.click(screen.getByTestId("completedTab"));
  expect(tabClick).toHaveBeenCalledTimes(1);
});
