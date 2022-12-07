import express from "express";
import * as eventsData from '../controllers/eventList-controller.js';


const router = express.Router();

router.route('/eventsData')
    .get(eventsData.getEvents)
    .post(eventsData.addEvent)

router.route('/eventsData/:eventId')
    .get(eventsData.getEventById)
    .delete(eventsData.deleteEventById)

export default router
