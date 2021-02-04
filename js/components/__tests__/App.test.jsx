import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("Renders App.", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("Rivers")).toBeInTheDocument();
      expect(screen.getByText("Amy")).toBeInTheDocument();
    });
  });
});
