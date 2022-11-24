import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    eventDate: {
        type: String,
        required: "eventDate is required",

    },

    eventName: {
        type: String,
        required: "event name is required",
    },

    eventId: {
        type: String,
        required: "eventId is required",
    },

    eventImage: {
        type: String,
        default: ""
    },

    eventTime: {
        type: String,
        required: "Event Time is required"
    }
})

const model = mongoose.model('eventMasterData', eventSchema);
export default model;