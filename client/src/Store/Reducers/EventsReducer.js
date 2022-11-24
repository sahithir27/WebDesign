import AppState from '../State';
import {EventActionType} from '../Actions/EventsAction.js';

const EventsReducer = (state=AppState, action) =>{
    const type = action.type;
    let newEventList;
    switch(type) {
        case 'GET_DATA' :
            newEventList = []
            let eventlist = action.todolist
            eventlist.forEach(function (item) {
                newEventList.push(item);
              });
            break;
        default:
            newEventList = [...state.eventlist];
            break;
    }
    return Object.assign({}, state, { eventlist : newEventList });
}

export default EventsReducer;
