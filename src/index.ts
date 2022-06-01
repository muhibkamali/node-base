import { AppDataSource } from "./config/db";
// import { Server, createServer } from 'http';
import { config } from "dotenv";
// import { User } from "./entity/User";
if (process.env.NODE_ENV !== "production") config();

AppDataSource.initialize()
  .then(async () => {
    console.log(
      "Here you can setup and run express / fastify / any other framework."
    );
  })
  .catch((error) => console.log(error));
