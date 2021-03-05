import { ApolloClient, InMemoryCache, HttpLink, makeVar } from "@apollo/client";

const userDefaults = {
  id: null,
  name: null,
  first_name: null,
};

export const userVar = makeVar(userDefaults);

export const link = new HttpLink({
  uri: "/graphql",

  // Use explicit `window.fetch` so tha outgoing requests
  // are captured and deferred until the Service Worker is ready.
  fetch: (...args) => fetch(...args),
});

export const cache = new InMemoryCache({
  Query: {
    fields: {
      user: {
        read: () => {
          console.log("cache read")
          return userVar();
        },
      },
    },
  },
});

export const client = new ApolloClient({
  link,
  cache,
});
