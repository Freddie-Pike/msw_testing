import React from "react";
import { ApolloProvider, InMemoryCache } from "@apollo/client";
import { MockedProvider } from "@apollo/client/testing";
import { GET_USER_INFO } from "../App";
import { client } from "../../ApolloClientSetup";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("Renders App with mocked provider.", async () => {
    const user = {
      user: { id: 1, name: "Jonas", first_name: "Jonas" },
    };
    const mocks = [
      {
        request: {
          query: GET_USER_INFO,
        },
        result: {
          data: user,
        },
      },
    ];
    const cache = new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            user: {
              read() {
                console.log("read");
                return user.user;
              },
            },
          },
        },
      },
    });

    render(
      <MockedProvider mocks={mocks} addTypename={false} cache={cache}>
        <App />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Jonas")).toBeInTheDocument();
    });
  });
});
