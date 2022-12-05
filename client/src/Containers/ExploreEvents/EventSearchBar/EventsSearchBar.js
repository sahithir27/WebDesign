import React, { useEffect, useState } from "react";
import './EventsSearchBar.scss'
import { useNavigate } from "react-router-dom";
import { id } from "date-fns/locale";
import { Link } from "react-router-dom";
import {updateUserEventDetails} from "../../../Store/Actions/LoginAction"
import { useDispatch } from "react-redux";
export default function App() {
  let [searchParam, setSearchParam] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch();
  let loggedInUserDetails = JSON.parse(sessionStorage.getItem("user"));
  function callRegister(eventId) {
    let uuid = loggedInUserDetails["uuid"]
    let payload = {
      'eventId' : eventId
    }
    dispatch(updateUserEventDetails(uuid, payload, "App"))
  }
  useEffect(() => {
    fetch('http://localhost:9002/eventsData')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      })
      .catch((err) => console.log(err));
  }, []);
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
  return (
    <div className="App">
      <input
        className="search-bar"
        type="text"
        onChange={(e) => {
          setSearchParam(e.target.value);
        }}
        placeholder="search your event"
      />
      <div className="events">
        {filteredData.map((event, index) => {
          return (
            <div key={index}>
              <div className='eventDetails'>
                <div className='details' >
                  {/* <img src={event.eventImage} alt="event" width="480" height="300" className='row__poster'/> */}
                  <img src={event.eventImage} alt="event" width="295" height="200" className='row__poster' />
                  <p className="event-name">{event.eventName}</p>
                  <div className="event-date-time">
                    <p className="event-date">{event.eventDate}</p>
                    <p className="event-time">{event.eventTime}</p>
                  </div>
                  <div className='buttons' >
                    <Link to={`/events/${event.eventId}`}>
                      <button className="viewBtn">View</button>
                    </Link>
                    {/* <button  className = "viewBtn">View</button> */}
                    <button onClick={() => callRegister(event.eventId)} className = "registerBtn">Register</button> 
                    {/* <button className = "interestedBtn">Interested</button> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
