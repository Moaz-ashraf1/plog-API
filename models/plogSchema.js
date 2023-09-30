const mongoose = require("mongoose");

const plogSchmea = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: [true, "you must provide a title of plog"],
      minLength: [10, "Title must be at least 10 characters long"],
    },
    Author: {
      type: String,
      required: [true, "you must provide author of plog"],
    },
    PublicationDate: {
      type: Date,
      default: Date.now(),
    },
    LastModifiedDate: {
      type: Date,
    },
    Content: {
      type: String,
      required: [true, "you must provide  content of plog"],
      minLength: [30, "Content must be greater than 30 characters"],
    },
    ReadTime: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Plog", plogSchmea);
