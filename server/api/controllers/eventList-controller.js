import { httpUtils } from './../utils/index.js';
import { eventData } from './../services/index.js';

export const getEvents = async (request, response) => {
    try{
        const events = await eventData.getEvents();
        httpUtils.setSuccessResponse(events, response);
    } catch (error) {
        httpUtils.setErrorResponse(error, response);
    }
}