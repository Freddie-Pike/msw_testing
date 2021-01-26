import "reflect-metadata";

import express from "express";
import cors from "cors";
import { createConnection } from "typeorm";
import { __prod__ } from "./constants";
import { join } from "path";
import { User } from "./db/entities/User";
const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();

const main = async () => {
  await createConnection({
    type: "postgres",
    database: "class-list",
    entities: [join(__dirname, "./db/entities/*.*")],
    // username: 'postgres',
    // password: 'postgres'
    dropSchema: true,
    logging: !__prod__,
    synchronize: !__prod__,
  });
  const defaultUser1 = await User.create({
    name: "Jamie",
    email: "Jamie@jamie.com",
  }).save();
  console.log({ defaultUser1 });

  const app = express();

  app.use(cors({ origin: "*" }));

  app.get("/users/:_user_id", jsonParser, async (req, res) => {
    const user = await User.findOne(req.params._user_id);
    res.send({ user });
  });

  app.listen(3002, () => {
    console.log("listening on localhost:3002");
  });
};

main();
