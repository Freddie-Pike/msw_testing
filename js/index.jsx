import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import handlers from "../test/handlers";

import { setupWorker } from "msw";

// NOTE: This should setup a msw instance but it doesn't.
// It instead uses the api.
// From docs: https://mswjs.io/docs/recipes/deferred-mounting
function prepare() {
  const worker = setupWorker(...handlers);
  return worker.start();
  return Promise.resolve();
}

prepare().then(() => {
  render(<App />, document.getElementById("root"));
});
