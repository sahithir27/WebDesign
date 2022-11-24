export const EventActionType = {
    ADD_EVENT : '[EventItem] Add Event item',
    UPDATE_EVENT : '[EventItem] Update Event item'
}

//Action method to Get Events to the api using Fetch
const getEvents = (url) => {
    return dispatch => {
        return fetch(url, { method: 'GET'}).then(res => {
            return res.json();
        }).then(res => {
            dispatch({type : 'GET_DATA',
                    eventlist : res })
        }).catch(err => {
            console.log('API failed')
        })
    }
}
export default getEvents