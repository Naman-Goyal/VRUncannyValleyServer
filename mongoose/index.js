import mongoose from "mongoose";

const mongoUrl = "mongodb://DarthPoseidon:IZgI2PpXLPbeRZ4h@results-shard-00-00-pzyp7.mongodb.net:27017,results-shard-00-01-pzyp7.mongodb.net:27017,results-shard-00-02-pzyp7.mongodb.net:27017/test?ssl=true&replicaSet=Results-shard-0&authSource=admin&retryWrites=true";

mongoose.Promise = global.Promise;

export const MongooseConnection = mongoose.connect(mongoUrl, { useNewUrlParser: true })
  .catch((connectError) => {
    console.error("Could not connect to MongoDB", connectError);
  });

export { TestSubject } from "./TestSubject";
export { MoveData } from "./MoveData";
export { Vector3 } from "./Vector3";
export { SingleTest } from "./SingleTest";