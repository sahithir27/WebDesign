import userRouter from './user-route.js';

export default (app) =>{
    app.use('/',userRouter)
}