
import React, { useEffect, useState } from "react";
import './EventsSearchBar.scss'
import { useNavigate } from "react-router-dom";
import { id } from "date-fns/locale";
import { Link } from "react-router-dom";
import { EventDetailsComponent } from "../../EventDetails/EventDetails";

import { connect } from 'react-redux'

const mapStoreToProps = (state) => ( state.eventlist ) 

function AppComponent() {
  let [searchParam, setSearchParam] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const events = this.state.eventlist;
  console.log(events)
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
   const history=useNavigate();
    function viewEvent(){
      console.log(">>>>>>>>>")
    
      alert("Hello");
      window.open('http://localhost:9002/eventsData/'+id)
      //history.push("/events/"+ event.eventName);
  }
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
            <div key="index">
              <div className='eventDetails'>
            <div className='details' >
              {/* <img src={event.eventImage} alt="event" width="480" height="300" className='row__poster'/> */}
              <img src={event.eventImage} alt="event" width="295" height="200" className='row__poster'/>
              Name : {event.eventName}<br></br>
              Event Date : {event.eventDate}<br></br>
              Event Time : {event.eventTime}<br></br>
              <div className='buttons' >
                {/* <button  className = "viewBtn" onClick={()=>{
                  //window.open('http://localhost:9002/eventsData/'+event.eventId)
                  
                  
              }}>View</button> */}
              <Link
              to={{
                pathname: `/view-event/${event.eventId}`,
                state: {events : event }
              }}
            >
              <button>View</button>
            </Link>
                <button  className = "registerBtn" >Register</button> 
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


export default connect(mapStoreToProps)(AppComponent);