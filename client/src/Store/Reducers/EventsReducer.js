import AppState from '../State';
import { EventsActionTypes } from '../Actions/EventsAction.js';
const EventsReducer = (state=AppState, action) =>{
    const type = action.type;
    const to_be_added_payload = action.to_be_added_payload;
    const deleted_payload = action.deleted_payload;
    let newEventList;
    switch(type) {
        case 'GET_DATA' :
            newEventList = []
            let eventlist = action.eventlist
            eventlist.forEach(function (item) {
                newEventList.push(item);
              });
            break;
        case EventsActionTypes.ADD_EVENT: 
            newEventList = [...state.eventlist];
            newEventList.push(to_be_added_payload);
            break;
        case EventsActionTypes.DELETE_EVENT:
            const filteredEventItem = state.eventlist.filter(e => e!= deleted_payload);
            newEventList = [...filteredEventItem];
        default:
            newEventList = [...state.eventlist];
            break;
    }
    return Object.assign({}, state, { eventlist : newEventList });
}
export default EventsReducer;