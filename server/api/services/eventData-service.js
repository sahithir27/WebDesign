import Event from '../models/eventList.js';

export const getEvents = async () => {
    try{
        const events = Event.find({});
        return events;
    }catch (error) {
        throw error;
    }
} 