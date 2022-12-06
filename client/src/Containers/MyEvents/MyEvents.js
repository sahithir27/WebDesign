import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {updateUserEventUnregisterDetails} from "./../../Store/Actions/LoginAction"
import { ToastContainer, toast } from 'react-toastify';
import './MyEvents.scss'
import { Link } from "react-router-dom";

const mapStoreToProps = (state) => ( state.myEventlist ) 
const mapDispatchToProps = dispatch => bindActionCreators({
    unregister: (url, eventid, callingComponent) => dispatch(updateUserEventUnregisterDetails(url, eventid, callingComponent))
  },dispatch);

export class MyEventsComponent extends Component {
    constructor(props) {
        super(props)
        let loggedInUserDetails = JSON.parse(sessionStorage.getItem("user"));
        this.state = {
            myEvents : [],
            eventsRegistered: loggedInUserDetails["eventsRegistered"],
            username: loggedInUserDetails["uuid"]
        }
        this.callApi = this.callApi.bind(this);
        //this.callUnregister = this.callUnregister.bind(this);
    }
    componentDidMount(){
        this.callApi();
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.myEvents.length !== this.state.myEvents.length) {

        }
    }
    async callUnregister(eventId) {
      let uuid = this.state.username
      let payload = {
        'eventId' : eventId
      }
      this.props.unregister(uuid, payload, "MyEventsComponent")
      // let loggedInUserDetails = JSON.parse(sessionStorage.getItem("user"));
      // this.setState({
      //   eventsRegistered: loggedInUserDetails["eventsRegistered"]
      // })
    }
    callApi = async () => {
        let i=0;
        let eventlist=[]
        console.log("Call Api")
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
      console.log(this.state.myEvents)
        return(
            <div className="events">
              <ToastContainer></ToastContainer>
        {this.state.myEvents.map((event, index) => {
          return (
            <div key={index}>
              <div className='eventDetails'>
                <div className='details' >
                  {/* <img src={event.eventImage} alt="event" width="480" height="300" className='row__poster'/> */}
                  <img src={event.eventImage} alt="event" width="295" height="200" className='row__poster' />
                  <p className="event-name">{event.eventName}</p>
                  <div className="event-date-time">
                    <p className="event-date">{event.eventDate}</p>
                    <p className="event-time">{event.eventTime}</p>
                  </div>
                  <div className='buttons' >
                    <Link to={`/events/${event.eventId}`}>
                      <button className="viewBtn">View</button>
                    </Link>
              <button onClick={() => this.callUnregister(event.eventId)} className = "unregisterBtn">Unregister</button>
              </div>
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