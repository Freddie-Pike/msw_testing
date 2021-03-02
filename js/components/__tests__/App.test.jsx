import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../ApolloClientSetup";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("Renders App.", async () => {
    render(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Jonas")).toBeInTheDocument();
    });
  });
});
