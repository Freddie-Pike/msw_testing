import "reflect-metadata";

import express from "express";
import cors from "cors";
import { createConnection, getRepository } from "typeorm";
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
  const defaultUser2 = await User.create({
    name: "Sarah",
    email: "Sarah@sarah.com",
  }).save();
  console.log({ defaultUser1 });
  console.log({ defaultUser2 });

  const app = express();

  app.use(cors({ origin: "*" }));

  app.get("/users/all", jsonParser, async (req, res) => {
    const users = await await getRepository(User).createQueryBuilder("user").getMany();
    console.log({users})
    res.send({ users });
  });

  app.listen(3002, () => {
    console.log("listening on localhost:3002");
  });
};

main();
