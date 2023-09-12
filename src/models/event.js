const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    trim: true,
    required: true,
  },
  eventTitle: {
    type: String,
    trim: true,
    required: true,
  },
  eventDescription: {
    type: String,
    trim: true,
    required: true,
  },
  eventLocation: {
    type: String,
    trim: true,
    required: true,
  },
  eventDate: {
    type: String,
    trim: true,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  }
});

const event = new mongoose.model('event', eventSchema);

module.exports = event;