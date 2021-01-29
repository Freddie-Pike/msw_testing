import { rest } from "msw";

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
  rest.get("*", (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(ctx.status(500), ctx.json({ error: "You must add request handler." }));
  }),
];

export default handlers;
