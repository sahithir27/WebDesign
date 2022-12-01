import React, { Component } from 'react'
import EventItem from './EventItem/EventItem'

export class MyEvents extends Component {
    constructor(props) {
        super(props)
        this.callApi = this.callApi.bind(this);
    }
    componentDidMount() {
        this.callApi();
    }

    //api call 
    callApi = () => {
        this.props.getData('http://localhost:9002/')
    };

    render() {

        const eventlist = []
        const items = eventlist.map((event, i) => <EventItem
            key={i}
            eventitem={event}
            index={i}>
        </EventItem>)
        return (
            <div>
                {items}
            </div>
        )
    }
}

export default MyEvents
