import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const link = new HttpLink({
  uri: "/graphql",

  // Use explicit `window.fetch` so tha outgoing requests
  // are captured and deferred until the Service Worker is ready.
  fetch: (...args) => fetch(...args),
});

const cache = new InMemoryCache();

export const client = new ApolloClient({
  link,
  cache,
});
