import { HTTP } from "../../HTTP"
import {showLoaderAction, hideLoaderAction} from './LoaderAction.js';
export const MyEventsActionTypes = {
    GET_INTERESTEDEVENT : '[EventItem] Get MyEvent item'
}
const getEventByIdAction = (payload) => {
    
    return{
        type: MyEventsActionTypes.GET_INTERESTEDEVENT, 
        payload : payload
    }
}
export const getEventById = (url) => {

    return async(dispatch) => {
        try{
            const response = await HTTP.get(url)
            dispatch(getEventByIdAction(response.data));
        }catch(error){
            console.log('error in handle user forgot password Action :'+error)
        }
    }
    }


export default getEventById
