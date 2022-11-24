import userRouter from './user-route.js';
import eventsData from './events-route.js'; 

export default (app) =>{
    app.use('/',userRouter),
    app.use('/',eventsData)
}