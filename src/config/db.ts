import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "blog",
  name: "blog",
  synchronize: true,
  logging: false,
  entities: [User],
  // entities: ["dist/db/entity/**/*.js"],
  // entities: [__dirname + "/../**/*.entity.{js,ts}"],
  migrations: [],
  subscribers: [],
});
