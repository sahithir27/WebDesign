import './EventDetails.scss'
import React, { Component } from 'react'
import { connect } from 'react-redux'


/*Component to display to-do item details, Delete to-do item 
and Mark the status of to-do item to Completed*/
export class EventDetailsComponent extends Component {
    
//   setSelected() {
//     const todoItem = this.props.todoitem
//     const id = todoItem.id
//     this.props.delete(todoItem,`http://localhost:9000/todoitems/${id}`)
//   }
//   setCompleted() {
//     const todoItem = this.props.todoitem
//     const id = todoItem.id
//     const updated_todoItem = {
//         title : todoItem.title,
//         description : todoItem.description,
//         dueDate : todoItem.duedate,
//         dueTime : todoItem.duetime,
//         status : "Completed"
//     }
//     this.props.update(todoItem, updated_todoItem,`http://localhost:9000/todoitems/${id}`)
//   }

  render() {

    return (
        <div className='eventDetails'>
            {/* <div>Id : {this.props.eventitem.id}</div> */}
            {/* <div><img src={this.props.eventitem.eventImage} alt="event" width="100" height="100"/></div>
            <div>Name : {this.props.eventitem.eventName}</div>
            <div>Event Date : {this.props.eventitem.eventDate}</div>
            <div>Event Time : {this.props.eventitem.eventTime}</div>
            <div className='buttons'>
                <button className = "viewBtn">View</button>
                <button className = "registerBtn">Register</button> */}
            <div className='details'>
              <img src={this.props.eventitem.eventImage} alt="event" width="250" height="200" className='row__poster row__posterLarge'/>
              Name : {this.props.eventitem.eventName}<br></br>
              Event Date : {this.props.eventitem.eventDate}<br></br>
              Event Time : {this.props.eventitem.eventTime}<br></br>
              <div className='buttons'>
                <button className = "viewBtn">View</button>
                <button className = "registerBtn">Register</button></div>
              </div>
        </div>
    )
  }
}
const EventDetails = connect(null, null)(EventDetailsComponent);
export default EventDetails