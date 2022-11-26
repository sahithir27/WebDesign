import './ExploreEvents.scss'
import EventItem from '../EventItem/EventItem.js'
import getEvents from '../../Store/Actions/EventsAction.js'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Item from './Item.js'
import Carousel from "react-elastic-carousel"

const breakPoints = [{
  width :1 , itemsToShow:1,
  width :250 , itemsToShow:2,
  width :768 , itemsToShow:6,
  width :1200 , itemsToShow:4,
  width :1200 , itemsToShow:5
}];
const mapStoreToProps = (state) => ( state.eventlist ) 

const mapDispatchToProps = dispatch => bindActionCreators({
  getEvents
},dispatch);

class EventListComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images:  null
    }
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
    const items = eventlist.map((event,i) => <EventItem 
    key={i}
    eventitem={event} 
    index={i}>
    </EventItem>)
    return (
      
     
          <ol className='ol'>
            {items}
         </ol>

         
         


    )
  }
}

const ExploreEvents = connect(mapStoreToProps, mapDispatchToProps)(EventListComponent)

export default ExploreEvents