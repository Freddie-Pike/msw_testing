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
    // userEvent.click(button);
    // expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  // it("should mock fetch", async () => {
  //   const result = await fetch(`http://localhost:3002/class_members/1`);
  //   const data = await result.json();
  //   // console.log(data);
  // });
});
