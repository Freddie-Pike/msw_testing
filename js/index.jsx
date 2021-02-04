import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import handlers from "../test/handlers";

import { setupWorker } from "msw";

const worker = setupWorker(...handlers);
worker.start();

render(<App />, document.getElementById("root"));
