const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  userId: String,
  title: String,
  author: String,
  year: Number,
  genre: String,
  imageUrl: String,
  ratings: [
    {
      userId: String,
      grade: Number
    }
  ],
  averageRating: Number
});
const Book = mongoose.model("Book", BookSchema);

module.exports = { Book };
