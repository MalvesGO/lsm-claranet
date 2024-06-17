import mongoose, { set } from "mongoose";
require("dotenv").config();

const dbUrl: string = process.env.DB_URL || "";

const connectDb = async () => {
  try {
    await mongoose.connect(dbUrl).then((data: any) => {
      console.log(`Connected to database ${data.connection.host}`);
    });
  } catch (error:any) {
    console.log(error.message);
    setTimeout(connectDb, 5000);
  }
};

export default connectDb;
