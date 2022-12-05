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
    },

    eventDescription: {
        type: String,
        default: "A social event is defined as an event characteristic of people forming groups. This can refer to events, shows, social functions and parties, contests and competitions."
    }
})
const model = mongoose.model('eventMasterData', eventSchema);
export default model;