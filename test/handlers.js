import { rest, graphql } from "msw";

const handlers = [
  rest.get("http://localhost:3002/users/all", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        users: [
          { id: 1, name: "Rivers", email: "rivers@rivers.com" },
          { id: 2, name: "Amy", email: "Amy@amy.com" },
        ],
      })
    );
  }),
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
