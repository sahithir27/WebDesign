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
        let loggedInUserDetails = JSON.parse(localStorage.getItem("user"));
        this.state = {
            myEvents : [],
            eventsRegistered: loggedInUserDetails["eventsRegistered"],
        }
        this.callApi = this.callApi.bind(this);
        //this.getEvents = this.getEvents.bind(this);
    }

    componentDidMount(){
        this.callApi();
       //this.getEvents();
            //let eventsList = []
            // (this.state.eventsRegistered).forEach(eventid => {
            //     var respose = this.props.getEventById(`http://localhost:9002/eventsData/${eventid}`)
            //     console.log(respose)
            //     //eventsList.push(eventitem)
            // });
           // console.log(eventsList)
        
    }
    callApi = ()=> {
        
        //let eventsList = []
        (this.state.eventsRegistered).forEach(eventid => {
            const eventitem = this.props.getEventById(`http://localhost:9002/eventsData/${eventid}`)
            //console.log(eventitem)
            //eventsList.push(eventitem)
            //this.state.myEvents.push(eventitem)
        });
        // this.setState({
        //     myEvents : this.state.myEvents
        // })
        // console.log(eventsList)
    }

    render() {
        //   const eventItem = this.props.myEventlist
        //   console.log(JSON.stringify(eventItem));
        // const items = this.state.myEvents.map((event, i) => <EventDetails
        //     key={i}
        //     eventitem={event}
        //     index={i}>
        // </EventDetails>)

        // const items = this.props.myEventlist.map((event, i) => <div
        //     key={i}
        //     eventitem={event}
        //     index={i}>
        // </div>)
        
        // return (
        //     <div>
        //         {items}
        //     </div>
        // )
        return(
            <div className="events">
        {this.props.myEventlist.map((event, index) => {
          return (
            <div key={index}>
              <div className='eventDetails'>
            <div className='details' >
              <img src={event[0].eventImage} alt="event" width="295" height="200" className='row__poster'/>
              Name : {event[0].eventName}<br></br>
              Event Date : {event[0].eventDate}<br></br>
              Event Time : {event[0].eventTime}<br></br>
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
