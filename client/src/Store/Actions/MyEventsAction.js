import { HTTP } from "../../HTTP"
import {showLoaderAction, hideLoaderAction} from './LoaderAction.js';
export const EventsActionTypes = {
    ADD_EVENT : '[EventItem] Add MyEvent item',
    UPDATE_EVENT : '[EventItem] Update MyEvent item',
    SET_EVENTS_DATA: "SET_MYEVENTS_DATA"
}

export const getUserById = (url) => {
        return fetch(url, { method: 'GET'}).then(res => {
            return res.json();
    }).catch(err => {
        console.log('API failed')
    })
}

export const myEvents = (url, eventId) => {

}