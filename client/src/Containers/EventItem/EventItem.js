import './EventItem.scss'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventDetails from '../EventDetails/EventDetails.js'

//component to show details of selected to-do item
export class EventItemComponent extends Component {
    constructor() {
      super(); 
     // this.state = { showDetails: false }
    }

    //method to display and hide details div
    // _showDetails = () => {
    //   if(this.state.showDetails === true) {
    //     this.setState({
    //       showDetails: false
    //     })
    //   }
    //   else {
    //     this.setState({
    //       showDetails: true
    //     })
    //   }
    // }
    render() {
        return (
        <div className='eventitem'>
          <li >
              {this.props.eventitem.title}

          </li>
            { this.state.showDetails && (
            <EventDetails eventitem = {this.props.todoitem}></EventDetails>
            )}
        </div>
        )
    }
}

const TodoItem = connect(null, null)(EventItemComponent);

export default TodoItem