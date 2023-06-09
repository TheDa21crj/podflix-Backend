const mongoose = require("mongoose");

const episodeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
  podcast: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Podcast",
    default: "",
  },
  thumbnail: [
    {
      type: String,
    },
  ],
  season: {
    type: "Number",
    required: true,
    default: 1,
  },
  videos: [{ type: String }],
  runTime: {
    type: String,
    default: "00:00",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const episodeList = new mongoose.model("Episode", episodeSchema);

module.exports = episodeList;
