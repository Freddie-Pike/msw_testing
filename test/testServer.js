import "whatwg-fetch";
import { setupServer } from "msw/node";
import handlers from "./handlers";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());
beforeEach(() => server.resetHandlers());

export { server };
