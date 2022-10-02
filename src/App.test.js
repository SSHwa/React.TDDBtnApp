import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />);
  const conuterElement = screen.getByTestId("counter");
  expect(conuterElement).toHaveTextContent(0);
});

test("minus button has correct text", () => {
  render(<App />);
  const btnElement = screen.getByTestId("btnminus");
  expect(btnElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);
  const btnElement = screen.getByTestId("btnplus");
  expect(btnElement).toHaveTextContent("+");
});

test("When the + btn is pressed, the counter changes to 1", () => {
  render(<App />);
  const btnElement = screen.getByTestId("btnplus");
  fireEvent.click(btnElement);
  const cntElement = screen.getByTestId("counter");
  expect(cntElement).toHaveTextContent(1);
});
