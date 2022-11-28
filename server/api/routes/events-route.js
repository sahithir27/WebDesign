import express from "express";
import * as eventsData from '../controllers/eventList-controller.js';


const router1 = express.Router();

router1.route('/eventsData')
    .get(eventsData.getEvents)
    // .get(eventsData.fetch)

router.route('/eventsData/:eventId')
    .get(eventsData.getEventById)

export default router
