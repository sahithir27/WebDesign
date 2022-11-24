import { useEffect } from "react";
import { connect } from 'react-redux';
import { getEventBriteEvents, saveInterestedEvent } from "../../Store/Actions/EventsAction";
import './Events.scss';
import EventSearchBar from "./EventSearchBar";
import Loader from '../../components/Loader/Loader.js'

const mapDisptchToProps = (dispatch) => {
    return {
        getEventBriteEvent: () => dispatch(getEventBriteEvents()),
        postInterestEvent: (interestedEvent) => dispatch(saveInterestedEvent(interestedEvent))
    }
  } 
  
  const mapStateToProps = (state) => {
    return {
      eventsList: state?.Events?.eventsData?._embedded,
      isLoading: state?.Loader?.showLoader,
      currentUserDetails: state.Login.currentUserDetails
    }
  }

const Events = (props) => {
  const { eventsList, isLoading, getEventBriteEvent, postInterestEvent} = props;

  useEffect(() => {
      getEventBriteEvent();
  },[]); 



  const __renderEventCards = () => {
      if (eventsList && eventsList.events && eventsList.events.length > 0) {
      return eventsList.events.map((item, index) => {
        const { images, name, priceRanges, classifications, dates, _embedded, url, info, id} = item;
        return item && (
        <div key={index} className="card-wrapper" href={url}>
          <div className="left-part">
            {images && images.length > 0 && <img src={images[0]?.url} alt="event-img"/> }
          </div>
          <div className="right-part">
            <div className="card-title">
              <h2>{name}</h2>
              {priceRanges && priceRanges.length > 0  ? 
              <div>${priceRanges[0]?.min} - ${priceRanges[0].max}</div> : 
              <div> Free </div>
              }
            </div>
            { classifications && classifications.length > 0 && <div>Genre: {classifications[0]?.genre?.name}</div>}
            { info &&  <p>{info}</p>} 
            <span>Date : {dates?.start?.localDate}</span>
            <span>Time : {dates?.start?.localTime}</span>
            <div className="right-bottom">
              { _embedded && _embedded.venues && <a target="_blank" href="#">
                Venue : {_embedded?.venues[0]?.name}
              </a> }
            <div>
                <button onClick={()=> saveEventData(item)} className="event-button"> Interested </button>
                <button onClick={()=> window.open(url)} className="event-button"> Learn More </button>
              </div>
            </div>
          </div>
        </div>
        )
      })
    } else {
      return (
        <h1> Sorry no results found</h1>
      )
    }
  }

  const saveEventData = (data) => {
    const interestedEvent = {
      eventId: data.id,
      eventName: data.name,
      eventDate: data.dates?.start?.localDate,
      eventTime: data.dates?.start?.localTime,
      userUUID: props.currentUserDetails.uuid
    }
    postInterestEvent(interestedEvent)
  }

  return isLoading ? <Loader/> : (
    <div className="events-container">
      <h1 className="event-title">EVENTS</h1>
      <EventSearchBar />
      {__renderEventCards()}
    </div>
  );
}

export default connect(mapStateToProps, mapDisptchToProps)(Events);
