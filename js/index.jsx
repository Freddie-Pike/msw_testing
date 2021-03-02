import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./ApolloClientSetup";
import { render } from "react-dom";
import App from "./components/App";
import handlers from "../test/handlers";

import { setupWorker } from "msw";

const worker = setupWorker(...handlers);
worker.start();

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
