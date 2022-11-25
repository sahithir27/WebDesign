import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from './Reducers/LoginReducer';
import EventsReducer from './Reducers/EventsReducer';
import BlogsReducer from './Reducers/BlogsReducer';

const store = configureStore({
    reducer: {
      Login: LoginReducer,
      eventlist : EventsReducer,
      blogs : BlogsReducer
    }
  })
  
  export default store;