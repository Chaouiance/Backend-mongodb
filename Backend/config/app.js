const express = require("express");
const cors = require("cors");
const app = express();
require("./../db/mongo.js");
require('dotenv').config()



console.log(process.env.IMAGES_PUBLIC_URL)
console.log(process.env.IMAGES_FOLDER)



app.use(cors());
app.use(express.json());
app.use('/images', express.static('images')); 


module.exports = { app };
