import mongoose from "mongoose";
const mongoURI =
  "mongodb://localhost:27017/login?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("mongo db connected successfully");
  });
};

export default connectToMongo;
