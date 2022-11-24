import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from './Reducers/LoginReducer';
import EventsReducer from './Reducers/EventsReducer';

const store = configureStore({
    reducer: {
      Login: LoginReducer,
      eventlist : EventsReducer
    }
  })
  
  export default store;