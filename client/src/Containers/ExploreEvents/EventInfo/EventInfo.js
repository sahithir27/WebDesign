import React, { Component } from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import './EventInfo.scss'
const EventInfo = () => {
  const eventlist = useSelector((state) => state.eventlist)
  const events = eventlist.eventlist
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find(obj => {
    return obj.eventId === id;
  });
  return (
    <div className='event-info-outer'>
      <button className='backBtn' onClick={() => navigate("/")}>Go back</button>
      <div className='event-info-inner'>
        <div className="event-wrap">
          <img src={event.eventImage} className='event-image' />
          <div className='event-info'>
            <h2>{event.eventName}</h2>
            <p>It's Happenning !!! Get Ready to attend {event.eventName} event on {event.eventDate} at {event.eventTime}</p>
          </div>
        </div>
        <p className='event-description'>{event.eventDescription}</p>
      </div>
    </div>
  );
};
export default EventInfo;