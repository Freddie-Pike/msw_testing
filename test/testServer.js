import "whatwg-fetch";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("http://localhost:3002/users/1", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        user: { id: 1, name: "Jamie", email: "jamie@gmail.com" },
      })
    );
  }),
  rest.get("*", (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(ctx.status(500), ctx.json({ error: "You must add request handler." }));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
beforeEach(() => server.resetHandlers());

export { server, rest };
