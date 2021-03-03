import { graphql } from "msw";

const handlers = [
  graphql.query("GetUserInfo", (_req, res, ctx) => {
    console.log("In GetUserInfo msw query handler");
    return res(
      ctx.data({
        user: {
          __typename: 'User',
          id: 1,
          name: "Jonas",
        },
      })
    );
  }),
];

export default handlers;
