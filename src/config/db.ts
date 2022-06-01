import "reflect-metadata";
import { DataSource } from "typeorm";

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
  entities: ["dist/db/entity/**/*.js"],
  migrations: [],
  subscribers: [],
});
