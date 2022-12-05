import AppState from '../State';
import {MyEventsActionTypes} from '../Actions/MyEventsAction'

const getInitialState = () => {
    return {
        myEventlist: []
    };
  }

const MyEventsReducer = (state=getInitialState(), action) => {
    const type = action.type
    let temp=[];
    let newMyEventList = []
    switch(type){
        case MyEventsActionTypes.GET_MYEVENT:
            temp = [...state.myEventlist]
            let eventItem = action.payload;
            temp.push(eventItem);
            break;
        default:
            newMyEventList = [...state.myEventlist];
            break;
    }
    temp.forEach(function (item) {
        newMyEventList.push(item);
      });
    return Object.assign({}, state, { myEventlist : newMyEventList });
}

export default MyEventsReducer