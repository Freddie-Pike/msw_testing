import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../Button";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  let onClickMock;

  beforeEach(() => {
    jest.resetAllMocks();
    onClickMock = jest.fn();
  });

  it("handles user click.", () => {
    render(<Button onClick={onClickMock}>Click Me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });

    userEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
