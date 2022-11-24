import './ExploreEvents.scss'
import EventItem from '../EventItem/EventItem.js'
import getEvents from '../../Store/Actions/EventsAction.js'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStoreToProps = (state) => ( state.eventlist ) 

const mapDispatchToProps = dispatch => bindActionCreators({
  getEvents
},dispatch);

class EventListComponent extends Component {
  constructor(props) {
    super(props)
    this.callApi = this.callApi.bind(this);
  }
  
  componentDidMount() {
    this.callApi();
  }
  
  //api call 
  callApi = () => {    
    this.props.getEvents('http://localhost:9002/eventsData')
  };

  render() {
    const eventlist = this.props.eventlist
    const items = eventlist.map((c,i) => <EventItem 
    key={i}
    todoitem={c} 
    index={i}>
    </EventItem>)
    return (
      <ol>
        {items}
      </ol>
    )
  }
}

const ExploreEvents = connect(mapStoreToProps, mapDispatchToProps)(EventListComponent)

export default ExploreEvents