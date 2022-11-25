import './EventDetails.scss'
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import image from './images';


// const mapDispatchToProps = (dispatch) => {
//   return {
   
//   }
// }

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
    // var dateString = this.props.eventitem.eventDate
    // var year = dateString.substr(0,4);
    // var month = dateString.substr(5,2);
    // var day = dateString.substr(8,2);
    // var eventDate = month + "-" + day + "-" + year

    return (
        <div className='detailsDiv'>
            {/* <div>Id : {this.props.eventitem.id}</div> */}
            <div><img src={this.props.eventitem.eventImage} alt="event" width="100" height="100"/></div>
           
            <div>Name : {this.props.eventitem.eventName}</div>
            <div>Event Date : {this.props.eventitem.eventDate}</div>
            <div>Event Time : {this.props.eventitem.eventTime}</div>
            {/* <div>Status : {this.props.eventitem.status}</div> */}
            <div className='buttons'>
                <button className = "viewBtn">View</button>
                <button className = "registerBtn">Register</button>
                
                {/* { this.props.eventitem.status === "Open"  && (<button className = "markAsCompleteBtn" onClick={this.setCompleted.bind(this)}>Mark as Completed</button>) } */}
            </div>
        </div>
    )
  }
}
const EventDetails = connect(null, null)(EventDetailsComponent);
export default EventDetails