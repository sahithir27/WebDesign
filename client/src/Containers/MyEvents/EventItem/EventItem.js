import React, { Component } from 'react'
import EventDetails from '../EventDetails/EventDetails.js';
export class EventItem extends Component {
  render() {
    return (
      <div>
        <EventDetails eventitem = {this.props.eventitem}></EventDetails>
      </div>
    )
  }
}

export default EventItem
