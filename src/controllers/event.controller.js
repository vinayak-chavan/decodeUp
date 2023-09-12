const mongoose = require("mongoose");
const event = require('../models/event');
const { successResponse, errorResponse } = require("../utils");

const addEvent = async (req, res) => {
  try {
    const {event_name, event_title, event_description, event_location, event_date } = req.body;
    const images = req.files.map((file) => file.filename);
    const payload = {
      eventName: event_name,
      eventTitle: event_title,
      eventDescription: event_description,
      eventLocation: event_location,
      eventDate: event_date,
      images,
    };

    const newEvent = new event(payload);
    const insertEvent = await newEvent.save();

    console.log("event added successfully");
    return successResponse(req, res, 201, 'You have created event successfully');
  } catch (error) {
    console.log(error.message);
    return errorResponse(req, res, 'something went wrong', 500, { err: error });
  }
};

module.exports = { addEvent };
