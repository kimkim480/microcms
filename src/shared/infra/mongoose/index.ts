/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import mongoose from "mongoose";

// mongodb://dockerContainerName:port
// "mongodb://database_microcms:27017"
interface IInput {
  db_uri: string;
}

export default ({ db_uri }: IInput) => {
  const connect = () => {
    mongoose
      .connect(db_uri, {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "test",
        user: "admin",
        pass: "admin",
      })
      .then(() => {
        return console.info(`Succesfully connected to ${db_uri}`);
      })
      .catch((err) => {
        console.error(err);
        return process.exit(1);
      });
  };

  connect();

  mongoose.connection.on("disconnect", connect);
};
