import React, { Component } from 'react'
import getEventById from './../../Store/Actions/MyEventsAction.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
const mapStoreToProps = (state) => ( state.myEventlist ) 
const mapDispatchToProps = dispatch => bindActionCreators({
    getEventById
  },dispatch);
export class MyEventsComponent extends Component {
    constructor(props) {
        super(props)
        let loggedInUserDetails = JSON.parse(sessionStorage.getItem("user"));
        this.state = {
            myEvents : [],
            eventsRegistered: loggedInUserDetails["eventsRegistered"],
        }
        this.callApi = this.callApi.bind(this);
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
        return(
            <div className="events">
        {this.state.myEvents.map((event, index) => {
          return (
            <div key={index}>
              <div className='eventDetails'>
            <div className='details' >
              <img src={event.eventImage} alt="event" width="295" height="200" className='row__poster'/>
              Name : {event.eventName}<br></br>
              Event Date : {event.eventDate}<br></br>
              Event Time : {event.eventTime}<br></br>
              </div>
        </div>
            </div>
          );
        })}
      </div>
        )
    }
}
const MyEvents = connect(mapStoreToProps, mapDispatchToProps)(MyEventsComponent)
export default MyEvents