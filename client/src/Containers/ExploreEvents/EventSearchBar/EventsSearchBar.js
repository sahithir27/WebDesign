import React, { useEffect, useState } from "react";
import './EventsSearchBar.scss'
import { Link } from "react-router-dom";
import { updateUserEventDetails, updateUserInterestedEventDetails, updateUserEventUnbookmarkDetails } from "../../../Store/Actions/LoginAction"

import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import TextField from '@mui/material/TextField';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsCalendar2Date, BsFillBookmarkFill } from 'react-icons/bs';

// import { View, Image, Text, LayoutAnimation } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  let [searchParam, setSearchParam] = useState("");
  let [data, setData] = useState([]);
  let [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch();
  const [isBookmarked, setIsBookmarked] = useState(false);

  let loggedInUserDetails = JSON.parse(sessionStorage.getItem("user"));
  const eventsInterested = loggedInUserDetails["eventsInterested"]
  function callRegister(eventId) {
    let uuid = loggedInUserDetails["uuid"]
    let payload = {
      'eventId': eventId
    }
    dispatch(updateUserEventDetails(uuid, payload, "App"))
  }
  function callInterested(eventId) {
    let uuid = loggedInUserDetails["uuid"]
    let payload = {
      'eventId': eventId
    }
    if(isBookmarked && eventsInterested.includes(eventId)){
      dispatch(updateUserEventUnbookmarkDetails(uuid, payload, "App"))
      setIsBookmarked(isBookmarked)
    }
    else {
      dispatch(updateUserInterestedEventDetails(uuid, payload, "App"))
      setIsBookmarked(!isBookmarked)
    }
  }

  useEffect(() => {
    fetch('http://localhost:9002/eventsData')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      })
      .catch((err) => console.log(err));
  }, [isBookmarked]);
  useEffect(() => {
    if (searchParam !== "") {
      const filteredData = data.filter(
        (event) =>
          event.eventName.toLowerCase().includes(searchParam.toLowerCase()) ||
          event.eventDate.includes(searchParam) ||
          event.eventTime.toLowerCase().includes(searchParam.toLowerCase())
      );
      setFilteredData([...filteredData]);
    } else {
      setFilteredData([...data]);
    }
  }, [searchParam]);

  console.log(eventsInterested)
  return (

    <div className="App">
      <ToastContainer></ToastContainer>

      <div className="search">
        <TextField
          className='search-bar'

          label="&#128269; Search Events"
          onChange={(e) => {
            setSearchParam(e.target.value);
          }}
          placeholder="search your event"
        >
        </TextField>
      </div>

      <div className="events">
        {filteredData.map((event, index) => {
          return (
            <div key={index}>
              <div className='eventDetails'>
                <div className='details' >
                  {/* <img src={event.eventImage} alt="event" width="480" height="300" className='row__poster'/> */}
                  <div className="bookmark-image-container">
                    <button onClick={() => callInterested(event.eventId)} className="interestedBtn">
                      <BsFillBookmarkFill className={eventsInterested.includes(event.eventId) ? "bookmark_icon_selected" : "bookmark_icon"} />
                    </button>
                    <img src={event.eventImage} alt="event" width="295" height="200" className='row__poster' />
                  </div>
                  <p className="event-name">{event.eventName}</p>
                  <div className="event-date-time">
                    <p className="event-date"> <BsCalendar2Date />&#160; {event.eventDate} </p>
                    <p className="event-time"> <AiOutlineClockCircle /> {event.eventTime} </p>
                  </div>
                  <div className='buttons' >
                    <Link to={`/events/${event.eventId}`}>
                      <button className="viewBtn">View</button>
                    </Link>
                    {/* <button  className = "viewBtn">View</button> */}
                    <button onClick={() => callRegister(event.eventId)} className="registerBtn">Register</button>
                    {/* <button onClick={() => callInterested(event.eventId)} className = "interestedBtn"><BsFillBookmarkCheckFill/></button> */}
                  </div>
                </div>
              </div>
            </div>
          );
        }

        )}

      </div>
    </div>

  );

}
