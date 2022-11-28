import { httpUtils } from './../utils/index.js';
import { eventData } from './../services/index.js';
// import * as eventService from '../services/eventData-service.js'

export const getEvents = async (request, response) => {
    try{
        
        const eventDate = request.query.eventDate;
        const eventName = request.query.eventName;
        const eventTime = request.query.eventTime;
        console.log("fetch method");
        //const query = {};
        //appends data to query string

        if(eventDate) {
            query.eventDate = eventDate;
        }
        if(eventName) {
            query.eventName = eventName;
        }
        if(eventTime) {
            query.eventTime = eventTime;
        }
        //console.log(query)
        const events = await eventData.getEvents(query);
        httpUtils.setSuccessResponse(events, response);
    } catch (error) {
        httpUtils.setErrorResponse(error, response);
    }
}


