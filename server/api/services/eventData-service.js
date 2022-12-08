import Event from '../models/eventList.js';

export const addEvent = async (newEvent) => {
    try{
        const event = new Event(newEvent)
        return event.save()
    }catch (error) {
        throw error;
    }
}
export const getEvents = async (query) => {
    try{
        const events = await Event.find(query);
        return events;
    }catch (error) {
        throw error;
    }
} 

export const getEventById = async (eventId) => {
    try{
        const event = await Event.find({eventId: eventId});
        return event;
    }catch (error) {
        throw error;
    }
}

export const deleteEventById = async (id) => {
    try{
        const event = await Event.findOneAndDelete({eventId: id})
        return event;
    }catch(error){
        throw error;
    }
}

export const countOfRegisteredUsers = async (id) => {
    try{
        const findEvent = await Event.findOne({eventId: id})
        const event = await Event.findOneAndUpdate({eventId: id}, 
            {NumberOfUsersRegistered: findEvent.NumberOfUsersRegistered+1}, 
            {returnDocument:'after'})

        return event;
    }catch(error){
        throw error;
    }
}
