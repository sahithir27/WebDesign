import React from 'react'
import './AdminPage.scss'
import './../../components/SideNav/SideNav.scss'
import { logout } from "../../Store/Actions/LoginAction";
import { addEventAction } from "../../Store/Actions/EventsAction"
import { connect } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const AdminPage= (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signoutClick =async()=>{
    let res = await props.logout();
    if(res){
      navigate("/login");
    }
  }
  const addEvent = async() => {
    const url = "http://localhost:9002/eventsData"
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const imgUrl = document.getElementById('imgUrl').value;
    const locationUrl = document.getElementById('locationUrl').value;
    const payload = {
      eventDate: date,
      eventName: name,
      eventId: id,
      eventImage: imgUrl,
      eventDescription: description,
      eventTime: time,
      eventLocation: locationUrl
    }
    dispatch(addEventAction(url, payload))
  }

  return (
    <div className="admin-event-form-outer">
      <div className="admin-header-container">
        <h1 className="admin-page-header">Welcome to Admin Page</h1>
        <div>
          <button className="logout-btn"
            onClick={signoutClick} 
          >Logout</button>
        </div>
      </div>
        <form className="admin-event-form" method="get">
        <ul>
        <li>
            <input type="text" className="id" id="id" name="event_id" placeholder="Event Id" />
          </li>
          <li>
            <input type="text" className="name" id="name" name="event_name" placeholder="Event Name" />
          </li>
          <li>
            <input type="text" className="date" id="date" name="event_date" placeholder="Date-YYYY-MM-DD" />
          </li>
          <li>
            <input type="text" className="time" id="time" name="event_time" placeholder="Time-24hr format" />
          </li>
          <li>
            <textarea className="description" id="description" name="event_description" placeholder="Event Description"></textarea>
          </li>
          <li>
            <input type="url" className="imgUrl" id="imgUrl" name="event_image" placeholder='Event Image Url'/>
          </li>
          <li>
            <input type="url" className="locationUrl" id="locationUrl" name="event_location" placeholder='Event Location'/>
          </li>
        </ul>
        <button className='addevent-button' onClick={addEvent}>Add Event</button>
      </form>
      </div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
      logout : () => dispatch(logout()),
  }
}

export default connect(null, mapDispatchToProps)(AdminPage);