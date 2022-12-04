import './EventDetails.scss'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {updateUserEventDetails} from "./../../Store/Actions/LoginAction"

const mapStateToProps = (state) => ({
  currentUserDetails: state.Login.currentUserDetails
})


/*Component to display to-do item details, Delete to-do item 
and Mark the status of to-do item to Completed*/


const mapDispatchToProps = (dispatch) => {
  return {
    register: (url, eventid) => dispatch(updateUserEventDetails(url, eventid))
  }
}


export class EventDetailsComponent extends Component {
  constructor(props) {
    super(props)
    let loggedInUserDetails = JSON.parse(localStorage.getItem("user"));
    this.state = {
      username: loggedInUserDetails["uuid"],
    }
  }
  
  callRegister() {
    alert('clicked register');
    let uuid = this.state.username
    let payload = {
      'eventId' : this.props.eventitem.eventId
    }
    this.props.register(uuid, payload, "EventDetails")
  }
  render() {
    return (
        <div className='eventDetails'>
            <div className='details'>
              {/* <img src={this.props.eventitem.eventImage} alt="event" width="480" height="300" className='row__poster'/> */}
              <img src={this.props.eventitem.eventImage} alt="event" width="295" height="200" className='row__poster'/>
              Name : {this.props.eventitem.eventName}<br></br>
              Event Date : {this.props.eventitem.eventDate}<br></br>
              Event Time : {this.props.eventitem.eventTime}<br></br>
              <div className='buttons'>
                <button className = "viewBtn">View</button>
                <button onClick={this.callRegister.bind(this)} className = "registerBtn">Register</button> 
                <button className = "interestedBtn">Interested</button></div>
              </div><br></br>
        </div>
    )
  }
}
const EventDetails = connect(mapStateToProps, mapDispatchToProps)(EventDetailsComponent);
export default EventDetails