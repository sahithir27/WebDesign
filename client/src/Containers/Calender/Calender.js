import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
export class Calendar extends Component {
    constructor(props) {
        super(props)
        let loggedInUserDetails = JSON.parse(sessionStorage.getItem("user"));
        this.state = {
            myEvents : [],
            eventsRegistered: loggedInUserDetails["eventsRegistered"],
        }
    }
    componentDidMount(){
        this.callApi();   
    }
    callApi = async () => {
        let i=0;
        let eventlist=[]
        for(i;i< this.state.eventsRegistered.length;i++){
            const response = await fetch(`http://localhost:9002/eventsData/${this.state.eventsRegistered[i]}`)
            const json = await response.json()
            eventlist.push(json[0])
          }
        this.setState( {
            myEvents : eventlist
        })
       }
  render() {
    let events = []
    this.state.myEvents.forEach(event => {
        let input = {
        title: event.eventName,
        start: event.eventDate + "T" + event.eventTime.substring(0,5)
        }
        events.push(input)
    });
    return (
      <div>
        <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            events={events}/>
      </div>
    )
  }
}
export default Calendar;