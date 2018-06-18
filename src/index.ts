import { send } from "micro";

import users from "./resolvers/users";

const app = (req: { url: string }, res: any) => {
  let resolver;

  if (req.url.indexOf("/users") > -1) {
    resolver = users;
  }

  if (typeof resolver === "function") {
    send(res, 200, resolver());
  }

  send(res, 404, { error: "No route found" });
};

export default app;
