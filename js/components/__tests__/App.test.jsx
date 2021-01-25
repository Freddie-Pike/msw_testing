import React from "react";
import { render, screen, act, waitForElementToBeRemoved } from "@testing-library/react";
import App from "../App";

import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("Renders App.", async () => {
    render(<App />);

    screen.debug();
    await waitForElementToBeRemoved(screen.getByText("loading..."));
    screen.debug();

    expect(screen.getByText("Jamie")).toBeInTheDocument();
  });
});
