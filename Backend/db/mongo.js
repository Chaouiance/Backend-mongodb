const mongoose = require("mongoose");
require("dotenv").config();


const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.dklppos.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

async function connect() {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to DB ");
  } catch (e) {
    console.error(e);
  }
}
connect();
