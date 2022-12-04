import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from './Reducers/LoginReducer';
import EventsReducer from './Reducers/EventsReducer';
import BlogsReducer from './Reducers/BlogsReducer';
import MyEventsReducer from './Reducers/MyEventsReducer';

const store = configureStore({
    reducer: {
      Login: LoginReducer,
      eventlist : EventsReducer,
      blogs : BlogsReducer,
      myEventlist : MyEventsReducer
    }
  })
  
  export default store;