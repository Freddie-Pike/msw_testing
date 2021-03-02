import { graphql } from "msw";

const handlers = [
  graphql.query("GetUserInfo", (_req, res, ctx) => {
    console.log("In GetUserInfo");
    return res(
      ctx.data({
        users: {
          id: 1,
          name: "Jonas",
        },
      })
    );
  }),
];

export default handlers;
