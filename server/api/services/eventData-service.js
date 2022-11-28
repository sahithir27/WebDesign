import Event from '../models/eventList.js';

export const getEvents = async (query) => {
    try{
        const events = Event.find(query);
        return events;
    }catch (error) {
        throw error;
    }
} 

 

