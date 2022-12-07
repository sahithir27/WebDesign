import Event from '../models/eventList.js';

export const getEvents = async (query) => {
    try{
        const events = Event.find(query);
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

export const deleteEventById = async (id) => {
    try{
        const event = Event.findOneAndDelete({eventId: id})
        return event;
    }catch(error){
        throw error;
    }
}
