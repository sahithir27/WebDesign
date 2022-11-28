import Event from '../models/eventList.js';

export const getEvents = async () => {
    try{
        const events = Event.find({});
        return events;
    }catch (error) {
        throw error;
    }
} 

export const getEventById = async (eventId) => {
    try{
        const event = Event.find({eventId: eventId});
        return event;
    }catch (error) {
        throw error;
    }
}