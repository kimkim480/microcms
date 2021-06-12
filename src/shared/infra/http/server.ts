import "reflect-metadata";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";

import { AppError } from "@shared/errors/AppErrors";
import connect from "@shared/infra/mongoose";

import "@shared/container";

import { router } from "./routes";

connect({
  db_uri: "mongodb://database_microcms:27017",
});

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
      status: "Error",
      message: `Internal Server Error - ${err.message}`,
    });
  }
);

app.listen(3333, () => {
  console.log("Server is running on port 3333!");
});